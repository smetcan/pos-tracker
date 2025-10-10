// routes/versions.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const db = require('../config/db');
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Create uploads/versions directory if it doesn't exist
        const dest = 'uploads/versions/';
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        cb(null, dest);
    },
    filename: function (req, file, cb) {
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniquePrefix + '-' + file.originalname);
    }
});

// File filter for allowed document types
const fileFilter = (req, file, cb) => {
    const allowedExtensions = ['msg', 'pdf', 'doc', 'docx'];
    const fileExtension = file.originalname.split('.').pop().toLowerCase();
    
    if (allowedExtensions.includes(fileExtension)) {
        cb(null, true);
    } else {
        cb(new Error(`Desteklenmeyen dosya formatı: ${fileExtension}. İzin verilen formatlar: ${allowedExtensions.join(', ')}`), false);
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 MB limit
    }
});

// Add a simple test route to verify the route is working
router.get('/versions/test', (req, res) => {
    res.json({ message: 'Versions route is working' });
});

router.get('/versions', (req, res) => {
    const sql = `
        SELECT av.id, av.versionNumber, av.deliveryDate, av.status, av.prodOnayDate,
               av.bugIstekTarihcesi, av.ekler, av.bilgiGuvOnayDurumu, av.bilgiGuvOnayBelgePath,
               v.name as vendorName, v.id as vendorId,
               GROUP_CONCAT(m.name, ', ') as models, GROUP_CONCAT(m.id, ', ') as modelIds 
        FROM AppVersion av
        JOIN Vendor v ON av.vendorId = v.id
        LEFT JOIN VersionModel vm ON av.id = vm.versionId
        LEFT JOIN Model m ON vm.modelId = m.id
        GROUP BY av.id ORDER BY av.deliveryDate DESC`;
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ "error": err.message });
        res.json(rows);
    });
});

router.post('/versions', (req, res) => {
    const { versionNumber, deliveryDate, vendorId, modelIds, bugIstekTarihcesi, ekler, bilgiGuvOnayDurumu } = req.body;
    if (!versionNumber || !deliveryDate || !vendorId || !modelIds || modelIds.length === 0) return res.status(400).json({ error: 'Versiyon numarası, teslim tarihi, vendor ve en az bir model seçimi zorunludur.' });
    
    const versionSql = 'INSERT INTO AppVersion (versionNumber, vendorId, deliveryDate, status, bugIstekTarihcesi, ekler, bilgiGuvOnayDurumu) VALUES (?, ?, ?, "Test", ?, ?, ?)';
    db.run(versionSql, [versionNumber, vendorId, deliveryDate, bugIstekTarihcesi || null, ekler || null, bilgiGuvOnayDurumu || 'Alınmadı'], function(err) {
        if (err) return res.status(500).json({ error: "Ana versiyon kaydı sırasında hata." });
        const newVersionId = this.lastID;
        const promises = modelIds.map(modelId => {
            return new Promise((resolve, reject) => {
                db.run('INSERT INTO VersionModel (versionId, modelId) VALUES (?, ?)', [newVersionId, modelId], (err) => {
                    if (err) reject(err); else resolve();
                });
            });
        });
        Promise.all(promises)
            .then(() => res.status(201).json({ id: newVersionId }))
            .catch(err => res.status(500).json({ error: "Model bağlantıları kaydedilirken hata oluştu." }));
    });
});

router.put('/versions/:id', (req, res) => {
    const { id } = req.params;
    const { versionNumber, deliveryDate, status, prodOnayDate, modelIds, bugIstekTarihcesi, ekler, bilgiGuvOnayDurumu } = req.body;
    if (!versionNumber || !deliveryDate || !status || !modelIds || modelIds.length === 0) return res.status(400).json({ error: 'Tüm alanların doldurulması ve en az bir model seçimi zorunludur.' });
    
    db.serialize(() => {
        db.run('BEGIN TRANSACTION');
        const updateSql = `UPDATE AppVersion SET versionNumber = ?, deliveryDate = ?, status = ?, prodOnayDate = ?, bugIstekTarihcesi = ?, ekler = ?, bilgiGuvOnayDurumu = ? WHERE id = ?`;
        db.run(updateSql, [versionNumber, deliveryDate, status, status === 'Prod' ? prodOnayDate : null, bugIstekTarihcesi || null, ekler || null, bilgiGuvOnayDurumu || 'Alınmadı', id], function(updateErr) {
            if (updateErr) {
                db.run('ROLLBACK');
                return res.status(500).json({ error: "Versiyon güncellenirken bir hata oluştu." });
            }
            
            // If bilgiGuvOnayDurumu is "Alınmadı" and there was a document, delete the document file
            if (bilgiGuvOnayDurumu === 'Alınmadı') {
                db.get("SELECT bilgiGuvOnayBelgePath FROM AppVersion WHERE id = ?", [id], (err, row) => {
                    if (err) {
                        db.run('ROLLBACK');
                        return res.status(500).json({ error: "Veritabanı hatası." });
                    }
                    
                    if (row && row.bilgiGuvOnayBelgePath) {
                        // Delete the file from filesystem
                        fs.unlink(row.bilgiGuvOnayBelgePath, (unlinkErr) => {
                            if (unlinkErr) {
                                console.warn(`Dosya sisteminden silinemedi: ${row.bilgiGuvOnayBelgePath}`);
                            }
                            
                            // Update database to remove file path
                            db.run("UPDATE AppVersion SET bilgiGuvOnayBelgePath = NULL WHERE id = ?", [id], (updateErr) => {
                                if (updateErr) {
                                    db.run('ROLLBACK');
                                    return res.status(500).json({ error: 'Veritabanı güncellenirken bir hata oluştu.' });
                                }
                                
                                // Continue with model updates
                                updateModels();
                            });
                        });
                    } else {
                        // No document to delete, continue with model updates
                        updateModels();
                    }
                });
            } else {
                // bilgiGuvOnayDurumu is not "Alınmadı", continue with model updates
                updateModels();
            }
            
            function updateModels() {
                db.run('DELETE FROM VersionModel WHERE versionId = ?', [id], (deleteErr) => {
                    if (deleteErr) {
                        db.run('ROLLBACK');
                        return res.status(500).json({ error: "Model bağlantıları silinirken hata oluştu." });
                    }
                    
                    const insertPromises = modelIds.map(modelId => {
                        return new Promise((resolve, reject) => {
                            db.run('INSERT INTO VersionModel (versionId, modelId) VALUES (?, ?)', [id, modelId], (err) => {
                                if (err) reject(err); else resolve();
                            });
                        });
                    });
                    
                    Promise.all(insertPromises)
                        .then(() => {
                            db.run('COMMIT');
                            res.json({ message: "Versiyon başarıyla güncellendi." });
                        })
                        .catch(err => {
                            db.run('ROLLBACK');
                            res.status(500).json({ error: "Model bağlantıları kaydedilirken hata oluştu." });
                        });
                });
            }
        });
    });
});

// New endpoint for uploading information security approval document
router.post('/versions/:id/bilgi-guv-onay-belge', (req, res) => {
    upload.single('belge')(req, res, (err) => {
        if (err) {
            // Handle multer errors
            if (err instanceof multer.MulterError) {
                if (err.code === 'LIMIT_FILE_SIZE') {
                    return res.status(400).json({ error: 'Dosya boyutu 5 MB sınırını aşıyor.' });
                }
                return res.status(400).json({ error: `Dosya yükleme hatası: ${err.message}` });
            }
            // Handle custom file filter errors
            return res.status(400).json({ error: err.message });
        }
        
        console.log('Received request for bilgi-guv-onay-belge upload');
        console.log('Params:', req.params);
        console.log('File:', req.file);
        
        const { id } = req.params;
        
        if (!req.file) {
            console.log('No file uploaded');
            return res.status(400).json({ error: 'Yüklenecek dosya seçilmedi.' });
        }
        
        console.log('File uploaded successfully:', req.file.path);
        
        const updateSql = `UPDATE AppVersion SET bilgiGuvOnayBelgePath = ? WHERE id = ?`;
        db.run(updateSql, [req.file.path, id], function(err) {
            if (err) {
                console.log('Database error:', err);
                // If there's an error, delete the uploaded file
                fs.unlink(req.file.path, (unlinkErr) => {
                    if (unlinkErr) console.error("Dosya silinirken hata:", unlinkErr);
                });
                return res.status(500).json({ error: "Belge veritabanına kaydedilirken bir hata oluştu." });
            }
            
            console.log('Database updated successfully');
            res.json({ 
                message: 'Bilgi güvenliği onay belgesi başarıyla yüklendi.',
                filePath: req.file.path,
                originalName: req.file.originalname
            });
        });
    });
});

// New endpoint for deleting information security approval document
router.delete('/versions/:id/bilgi-guv-onay-belge', (req, res) => {
    const { id } = req.params;
    
    // First get the file path
    const selectSql = "SELECT bilgiGuvOnayBelgePath FROM AppVersion WHERE id = ?";
    db.get(selectSql, [id], (err, row) => {
        if (err) return res.status(500).json({ error: "Veritabanı hatası." });
        if (!row) return res.status(404).json({ error: 'Versiyon bulunamadı.' });
        if (!row.bilgiGuvOnayBelgePath) return res.status(404).json({ error: 'Onay belgesi bulunamadı.' });
        
        // Delete the file from filesystem
        fs.unlink(row.bilgiGuvOnayBelgePath, (unlinkErr) => {
            if (unlinkErr) console.warn(`Dosya sisteminden silinemedi: ${row.bilgiGuvOnayBelgePath}`);
            
            // Update database to remove file path
            const updateSql = "UPDATE AppVersion SET bilgiGuvOnayBelgePath = NULL WHERE id = ?";
            db.run(updateSql, [id], function(updateErr) {
                if (updateErr) return res.status(500).json({ error: 'Veritabanı güncellenirken bir hata oluştu.' });
                res.status(200).json({ message: 'Onay belgesi başarıyla silindi.' });
            });
        });
    });
});

router.delete('/versions/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM AppVersion WHERE id = ?`;
    db.run(sql, [id], function(err) {
        if (err) return res.status(500).json({ error: "Veritabanından versiyon silme sırasında hata." });
        if (this.changes === 0) return res.status(404).json({ error: "Silinecek versiyon bulunamadı." });
        res.status(204).send();
    });
});

module.exports = router;