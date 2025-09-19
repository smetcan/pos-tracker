﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿// Helper function for modal badge styling
function getBadgeClassForModal(text) {
    switch (text) {
        case "Program Hatası": return 'px-3 py-1 text-sm font-semibold rounded-full badge-program-hatasi';
        case "Yeni Talep": return 'px-3 py-1 text-sm font-semibold rounded-full badge-yeni-talep';
        case "Açık": return 'px-2 py-1 text-xs font-medium rounded-full badge-acik';
        case "Test Edilecek": return 'px-2 py-1 text-xs font-medium rounded-full badge-test-edilecek';
        case "Kapalı": return 'px-2 py-1 text-xs font-medium rounded-full badge-kapali';
        case "Yüksek": return 'px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 border border-red-200';
        case "Orta": return 'px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200';
        case "Düşük": return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200';
        default: return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200';
    }
}

// Helper function to get appropriate icons for field types
function getFieldIcon(fieldType) {
    const icons = {
        'text': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',
        'email': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>',
        'password': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>',
        'select': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>',
        'date': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',
        'tel': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>',
        'textarea': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
        'user': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>',
        'building': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
        'code': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>',
        'tag': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z"></path></svg>',
        'status': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
        'level': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
        'version': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14L17 4M11 9h2m-2 4h2"></path></svg>',
        'number': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>',
        'file': '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>'
    };
    return icons[fieldType] || icons['text'];
}

// Helper function to create enhanced input field HTML
function createEnhancedField(fieldConfig) {
    const { id, label, type = 'text', value = '', required = false, disabled = false, readonly = false, placeholder = '', options = [], iconType = type, className = '', rows = 3 } = fieldConfig;
    
    const icon = getFieldIcon(iconType);
    const requiredAttr = required ? 'required' : '';
    const disabledAttr = disabled ? 'disabled' : '';
    const readonlyAttr = readonly ? 'readonly' : '';
    const placeholderAttr = placeholder ? `placeholder="${placeholder}"` : '';
    
    let fieldHTML = '';
    
    if (type === 'select') {
        const optionsHTML = options.map(opt => `<option value="${opt.value}" ${opt.selected ? 'selected' : ''}>${opt.text}</option>`).join('');
        fieldHTML = `<select id="${id}" ${requiredAttr} ${disabledAttr} class="${className}">${optionsHTML}</select>`;
    } else if (type === 'textarea') {
        fieldHTML = `<textarea id="${id}" rows="${rows}" ${requiredAttr} ${disabledAttr} ${readonlyAttr} ${placeholderAttr} class="${className}">${value}</textarea>`;
    } else {
        fieldHTML = `<input type="${type}" id="${id}" value="${value}" ${requiredAttr} ${disabledAttr} ${readonlyAttr} ${placeholderAttr} class="${className}">`;
    }
    
    return `
        <div class="modal-input-group">
            <label for="${id}">
                ${icon}
                ${label}${required ? ' <span class="text-red-500">*</span>' : ''}
            </label>
            ${fieldHTML}
        </div>
    `;
}

    function showErrorModal(message) {
    modalContainer.innerHTML = `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all text-center">
                <div class="p-6">
                    <svg class="mx-auto mb-4 w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    <h3 class="text-lg font-semibold text-red-600">Bir Hata Oluştu</h3>
                    <p class="mt-2 text-sm text-gray-600">${message}</p>
                </div>
                <div class="flex items-center justify-center p-4 border-t rounded-b-md bg-gray-50">
                    <button id="close-error-modal" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 text-sm font-medium">Kapat</button>
                </div>
            </div>
        </div>`;
    document.getElementById('close-error-modal')?.addEventListener('click', () => modalContainer.innerHTML = '');
}

    function getVendorModalHTML(vendor = {}, contacts = []) {
    const isEdit = vendor.id !== undefined;
    const title = isEdit ? 'Vendor Düzenle' : 'Yeni Vendor Ekle';
    
    // Sadece düzenleme modundaysa iletişim kişileri HTML'ini oluştur
    const contactsSectionHTML = isEdit ? `
        <div class="mt-6">
            <div class="flex justify-between items-center mb-2">
                <h4 class="font-semibold text-gray-800">İletişim Kişileri</h4>
                <button id="add-new-contact-btn" class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200">Yeni Ekle</button>
            </div>
            <div id="vendor-contacts-container" class="border rounded-md bg-gray-50 max-h-48 overflow-y-auto">
                ${contacts.length > 0 ? contacts.map(contact => `
                    <div class="flex justify-between items-center p-2 border-t">
                        <div>
                            <p class="font-medium text-sm">${contact.name} ${contact.preferred ? '<span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Birincil</span>' : ''}</p>
                            <p class="text-xs text-gray-500">${contact.email || ''} ${contact.phone || ''}</p>
                        </div>
                        <div>
                            <button class="edit-contact-btn text-blue-600 hover:underline text-sm mr-2" data-contact-id="${contact.id}">Düzenle</button>
                            <button class="delete-contact-btn text-red-600 hover:underline text-sm" data-contact-id="${contact.id}">Sil</button>
                        </div>
                    </div>
                `).join('') : '<p class="text-sm text-gray-500 p-3 border-t text-center">İletişim kişisi bulunmuyor.</p>'}
            </div>
        </div>
    ` : '';

    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-lg transform transition-all flex flex-col max-h-full">
                <div class="relative flex items-center justify-center p-4 border-b rounded-t-md bg-gray-50">
                    <h3 class="text-xl font-semibold text-gray-800">${title}</h3>
                    <button type="button" class="cancel-modal-btn absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="p-6 overflow-y-auto">
                    <form id="vendor-form" class="space-y-4">
                        <input type="hidden" id="vendor-id" value="${vendor.id || ''}">
                        <div class="grid grid-cols-2 gap-x-6">
                            ${createEnhancedField({
                                id: 'vendor-name',
                                label: 'Vendor Adı',
                                type: 'text',
                                value: vendor.name || '',
                                required: true,
                                iconType: 'building'
                            })}
                            ${createEnhancedField({
                                id: 'vendor-make-code',
                                label: 'Vendor Kodu',
                                type: 'text',
                                value: vendor.makeCode || '',
                                required: true,
                                disabled: isEdit,
                                iconType: 'code'
                            })}
                        </div>
                    </form>
                    ${contactsSectionHTML}
                </div>
                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50 gap-2">
                    <button type="button" class="cancel-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                    <button type="submit" form="vendor-form" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">${isEdit ? 'Değişiklikleri Kaydet' : 'Kaydet'}</button>
                </div>
            </div>
        </div>`;
}

function getUserModalHTML(user = {}) {
    const isEdit = user.id !== undefined; // Bu şu an için kullanılmıyor ama gelecek için iyi.
    const title = 'Yeni Kullanıcı Ekle';

    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-lg transform transition-all flex flex-col max-h-full">
                <div class="relative flex items-center justify-center p-4 border-b rounded-t-md bg-gray-50">
                    <h3 class="text-xl font-semibold text-gray-800">${title}</h3>
                    <button type="button" class="cancel-modal-btn absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="p-6 overflow-y-auto">
                    <form id="user-form" class="space-y-4">
                        <div class="grid grid-cols-2 gap-x-6">
                            ${createEnhancedField({
                                id: 'user-name',
                                label: 'İsim',
                                type: 'text',
                                required: true,
                                iconType: 'user'
                            })}
                            ${createEnhancedField({
                                id: 'user-surname',
                                label: 'Soyisim',
                                type: 'text',
                                required: true,
                                iconType: 'user'
                            })}
                            ${createEnhancedField({
                                id: 'user-userName',
                                label: 'Kullanıcı Adı',
                                type: 'text',
                                required: true,
                                iconType: 'user'
                            })}
                            ${createEnhancedField({
                                id: 'user-email',
                                label: 'E-posta',
                                type: 'email',
                                iconType: 'email'
                            })}
                            <div class="col-span-2">
                                ${createEnhancedField({
                                    id: 'user-password',
                                    label: 'Şifre',
                                    type: 'password',
                                    required: true,
                                    iconType: 'password'
                                })}
                            </div>
                        </div>
                    </form>
                </div>
                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50 gap-2">
                    <button type="button" class="cancel-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                    <button type="submit" form="user-form" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">Kullanıcı Oluştur</button>
                </div>
            </div>
        </div>`;
}

function getResetPasswordModalHTML(userName) {
    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all flex flex-col">
                <div class="relative flex items-center justify-center p-4 border-b rounded-t-md bg-gray-50">
                    <h3 class="text-xl font-semibold text-gray-800">Şifre Sıfırla</h3>
                    <button type="button" class="cancel-modal-btn absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="p-6">
                    <form id="reset-password-form" class="space-y-4">
                        <p class="text-sm text-center"><strong>${userName}</strong> kullanıcısı için yeni bir şifre belirleyin.</p>
                        ${createEnhancedField({
                            id: 'new-password',
                            label: 'Yeni Şifre',
                            type: 'password',
                            required: true,
                            iconType: 'password'
                        })}
                    </form>
                </div>
                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50 gap-2">
                    <button type="button" class="cancel-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                    <button type="submit" form="reset-password-form" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">Şifreyi Güncelle</button>
                </div>
            </div>
        </div>`;
}

function getChangePasswordModalHTML() {
    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all flex flex-col">
                <div class="relative flex items-center justify-center p-4 border-b rounded-t-md bg-gray-50">
                    <h3 class="text-xl font-semibold text-gray-800">Şifre Değiştir</h3>
                    <button type="button" class="cancel-modal-btn absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="p-6">
                    <form id="change-password-form" class="space-y-4">
                        ${createEnhancedField({
                            id: 'old-password',
                            label: 'Mevcut Şifre',
                            type: 'password',
                            required: true,
                            iconType: 'password'
                        })}
                        ${createEnhancedField({
                            id: 'new-password',
                            label: 'Yeni Şifre',
                            type: 'password',
                            required: true,
                            iconType: 'password'
                        })}
                    </form>
                </div>
                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50 gap-2">
                    <button type="button" class="cancel-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                    <button type="submit" form="change-password-form" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">Şifreyi Güncelle</button>
                </div>
            </div>
        </div>`;
}

    function getContactSubModalHTML(vendor, contact = {}) {
    const isEdit = contact.id !== undefined;
    const title = isEdit ? 'Kişi Düzenle' : 'Yeni Kişi Ekle';
    
    return `
        <div id="contact-sub-modal" class="fixed inset-0 bg-gray-800 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all flex flex-col">

                <div class="relative flex items-center justify-center p-4 border-b rounded-t-md bg-gray-50">
                    <h3 class="text-lg font-semibold text-gray-800">${title}</h3>
                    <button type="button" class="cancel-contact-sub-modal absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <div class="p-6">
                    <form id="contact-form" class="space-y-4">
                        <input type="hidden" id="contact-id" value="${contact.id || ''}">
                        <input type="hidden" id="contact-vendor-id" value="${vendor.id}">
                        ${createEnhancedField({
                            id: 'contact-name',
                            label: 'İsim',
                            type: 'text',
                            value: contact.name || '',
                            required: true,
                            iconType: 'user'
                        })}
                        ${createEnhancedField({
                            id: 'contact-email',
                            label: 'E-posta',
                            type: 'email',
                            value: contact.email || '',
                            iconType: 'email'
                        })}
                        ${createEnhancedField({
                            id: 'contact-phone',
                            label: 'Telefon',
                            type: 'tel',
                            value: contact.phone || '',
                            iconType: 'tel'
                        })}
                        <div class="pt-2">
                            <div class="flex items-center">
                                <input type="checkbox" id="contact-preferred" class="h-4 w-4 rounded border-gray-300" ${contact.preferred ? 'checked' : ''}>
                                <label for="contact-preferred" class="ml-2 block text-sm">Birincil iletişim kişisi yap</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50 gap-2">
                    <button type="button" class="cancel-contact-sub-modal px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                    <button type="submit" form="contact-form" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">${isEdit ? 'Güncelle' : 'Ekle'}</button>
                </div>

            </div>
        </div>`;
}

    function getModelModalHTML(vendors, model = {}) {
    const isEdit = model.id !== undefined;
    const title = isEdit ? 'Model Düzenle' : 'Yeni Model Ekle';
    const vendorOptions = vendors.map(v => `<option value="${v.id}" ${model.vendorId == v.id ? 'selected' : ''}>${v.name}</option>`).join('');

    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-lg transform transition-all flex flex-col max-h-full">
                
                <div class="relative flex items-center justify-center p-4 border-b rounded-t-md bg-gray-50">
                    <h3 class="text-xl font-semibold text-gray-800">${title}</h3>
                    <button type="button" class="cancel-modal-btn absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <div class="p-6 overflow-y-auto">
                    <form id="model-form" class="space-y-4">
                        <input type="hidden" id="model-id" value="${model.id || ''}">
                        ${createEnhancedField({
                            id: 'model-name',
                            label: 'Model Adı',
                            type: 'text',
                            value: model.name || '',
                            required: true,
                            iconType: 'text',
                            className: 'name="name"'
                        })}
                        ${createEnhancedField({
                            id: 'model-code',
                            label: 'Model Kodu',
                            type: 'text',
                            value: model.code || '',
                            required: true,
                            iconType: 'code',
                            className: 'name="code"'
                        })}
                        <div class="modal-input-group">
                            <label for="model-vendor-id">
                                ${getFieldIcon('building')}
                                Vendor <span class="text-red-500">*</span>
                            </label>
                            <select id="model-vendor-id" name="vendorId" required>
                                <option value="">Seçiniz...</option>
                                ${vendorOptions}
                            </select>
                        </div>
                        <div class="space-y-2 pt-2">
                            <div class="flex items-center">
                                <input type="checkbox" id="model-is-techpos" name="isTechpos" class="h-4 w-4 rounded border-gray-300" ${model.isTechpos ? 'checked' : ''}>
                                <label for="model-is-techpos" class="ml-2 block text-sm text-gray-900">TechPOS mu?</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="model-is-android-pos" name="isAndroidPos" class="h-4 w-4 rounded border-gray-300" ${model.isAndroidPos ? 'checked' : ''}>
                                <label for="model-is-android-pos" class="ml-2 block text-sm text-gray-900">Android POS mu?</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="model-is-okc-pos" name="isOkcPos" class="h-4 w-4 rounded border-gray-300" ${model.isOkcPos ? 'checked' : ''}>
                                <label for="model-is-okc-pos" class="ml-2 block text-sm text-gray-900">ÖKC POS mu?</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50 gap-2">
                    <button type="button" class="cancel-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                    <button type="submit" form="model-form" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">${isEdit ? 'Değişiklikleri Kaydet' : 'Kaydet'}</button>
                </div>
            </div>
        </div>`;
}

    function getBulguViewModalHTML(bulgu, attachments = [], history = []) {
    const vendorName = vendorsData.find(v => v.id == bulgu.vendorId)?.name || '';
    const versionName = versionsData.find(v => v.id == bulgu.cozumVersiyonId)?.versionNumber || '';
    let affectedModelsArray = [];
    if (bulgu.modelIds) {
        const ids = (typeof bulgu.modelIds === 'string') ? bulgu.modelIds.split(',').map(s => s.trim()) : bulgu.modelIds;
        affectedModelsArray = ids.map(id => modelsData.find(m => String(m.id) === String(id))?.name).filter(Boolean);
    }
    const modelsHtml = affectedModelsArray.length > 0 ? affectedModelsArray.map(m => `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${m}</span>`).join('') : '-';

    const attachmentsHtml = attachments.length > 0 ? attachments.map(att => `
        <a href="/${att.filePath}" target="_blank" class="text-sm text-blue-600 hover:underline flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
            ${att.originalName}
        </a>
    `).join('') : '<p class="text-sm text-gray-500">Ekli dosya bulunmuyor.</p>';

    const normalizeStatus = (s) => {
        if (s == null) return s;
        const t = String(s);
        if (/Kapal./.test(t)) return 'Kapali';
        if (/A.{0,4}k/.test(t)) return 'Acik';
        return t;
    };
    const fixHistoryAction = (a) => {
        if (a == null) return a;
        return /Durum/.test(a) ? 'Durum Degistirildi' : a;
    };
    const fixHistoryDetails = (d) => {
        if (d == null) return d;
        const m = String(d).match(/Durum '(.+?)' iken '(.+?)' olarak .*/);
        if (m) {
            const from = normalizeStatus(m[1]);
            const to = normalizeStatus(m[2]);
            return `Durum '${from}' iken '${to}' olarak degistirildi.`;
        }
        return d;
    };
    const hasHistory = Array.isArray(history) && history.length > 0;
    const historyHtml = hasHistory ? history.map(h => {
        const date = new Date(h.timestamp).toLocaleString('tr-TR');
        return `
            <div class="py-2 border-b last:border-none">
                <p class="text-sm"><strong class="font-medium">${h.userName}</strong> - <span class="text-gray-600">${fixHistoryAction(h.action)}</span></p>
                ${h.details ? `<p class="text-xs text-gray-500 mt-1 pl-2 border-l-2">${fixHistoryDetails(h.details)}</p>` : ''}
                <p class="text-xs text-gray-400 text-right">${date}</p>
            </div>
        `;
    }).join('') : '<p class="text-sm text-gray-500 text-center py-2">Bu bulgu için bir geçmiş kaydı bulunmuyor.</p>';

    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-2xl transform transition-all flex flex-col max-h-full">
                <div class="relative flex items-center justify-between p-4 border-b rounded-t-md bg-gray-50">
                    <div class="flex items-center gap-3">
                        <h3 class="text-xl font-semibold text-gray-800">Bulgu Detayları: #${bulgu.id}</h3>
                        <span class="${getBadgeClassForModal(bulgu.bulguTipi)}">${bulgu.bulguTipi}</span>
                    </div>
                    <button type="button" data-close-bulgu-view class="absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="p-6 overflow-y-auto space-y-4">
                    <div class="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border">
                        <h4 class="text-lg font-medium text-gray-900 mb-2">${bulgu.baslik}</h4>
                        <div class="flex items-center gap-2">
                            <span class="text-sm text-gray-600">Tip:</span>
                            <span class="${getBadgeClassForModal(bulgu.bulguTipi)}">${bulgu.bulguTipi}</span>
                            <span class="text-sm text-gray-600 ml-4">Durum:</span>
                            <span class="${getBadgeClassForModal(bulgu.status)}">${bulgu.status}</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                        <div><strong>Vendor:</strong> ${vendorName}</div>
                        <div><strong>Etki Seviyesi:</strong> <span class="${getBadgeClassForModal(bulgu.etkiSeviyesi)}">${bulgu.etkiSeviyesi}</span></div>
                        <div><strong>Tespit Tarihi:</strong> ${bulgu.tespitTarihi}</div>
                        <div><strong>Çözüm Versiyon:</strong> ${versionName || '-'}</div>
                    </div>
                    <div>
                        <strong class="text-sm font-medium">Etkilenen Modeller:</strong>
                        <div class="mt-2">${modelsHtml}</div>
                    </div>
                    <div>
                        <strong class="text-sm font-medium">Detaylı Açıklama:</strong>
                        <p class="mt-2 p-3 bg-gray-50 border rounded-md whitespace-pre-wrap text-sm">${bulgu.detayliAciklama || '-'}</p>
                    </div>
                    <div>
                        <strong class="text-sm font-medium">Notlar:</strong>
                        <p class="mt-2 p-3 bg-gray-50 border rounded-md whitespace-pre-wrap text-sm">${bulgu.notlar || '-'}</p>
                    </div>
                    <div>
                        <strong class="text-sm font-medium">Ekli Dosyalar:</strong>
                        <div class="mt-2 p-3 bg-gray-50 border rounded-md space-y-2">
                            ${attachmentsHtml}
                        </div>
                    </div>
                    <div>
                        <strong class="text-sm font-medium">Değişiklik Geçmişi:</strong>
                        <div class="mt-2 p-3 bg-gray-50 border rounded-md max-h-48 overflow-y-auto">
                            ${historyHtml}
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50">
                    <button type="button" data-close-bulgu-view class="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">Kapat</button>
                </div>
            </div>
        </div>`;
}

    function getVersionViewModalHTML(version) {
    const modelsHtml = version.models
        ? version.models.split(',').map(m => `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${m.trim()}</span>`).join('')
        : '-';

    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-2xl transform transition-all flex flex-col max-h-full">
                <div class="relative flex items-center justify-center p-4 border-b rounded-t-md bg-gray-50">
                    <h3 class="text-xl font-semibold text-gray-800">Versiyon Detayları: ${version.versionNumber}</h3>
                    <button type="button" class="close-modal-btn absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="p-6 overflow-y-auto space-y-4">
                    <div class="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                        <div><strong>Vendor:</strong> ${version.vendorName}</div>
                        <div><strong>Teslim Tarihi:</strong> ${version.deliveryDate || '-'}</div>
                        <div><strong>Durum:</strong> <span class="px-2 py-1 text-xs font-medium rounded-full ${version.status === 'Prod' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">${version.status}</span></div>
                        <div><strong>Prod Onay Tarihi:</strong> ${version.prodOnayDate || '-'}</div>
                    </div>
                    <div>
                        <strong class="text-sm font-medium">Geçerli Modeller:</strong>
                        <div class="mt-2">${modelsHtml}</div>
                    </div>
                    <div>
                        <strong class="text-sm font-medium">Bug/İstek Tarihçesi:</strong>
                        <p class="mt-2 p-3 bg-gray-50 border rounded-md whitespace-pre-wrap text-sm">${version.bugIstekTarihcesi || '-'}</p>
                    </div>
                    <div>
                        <strong class="text-sm font-medium">Notlar:</strong>
                        <p class="mt-2 p-3 bg-gray-50 border rounded-md whitespace-pre-wrap text-sm">${version.ekler || '-'}</p>
                    </div>
                </div>
                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50">
                    <button type="button" class="close-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">Kapat</button>
                </div>
            </div>
        </div>`;
}

function getBulguModalHTML(vendors, models, versions, bulgu = {}, attachments = []) {
    const isEdit = bulgu.id !== undefined;
    const title = isEdit ? 'Bulgu/Talep Düzenle' : 'Yeni Bulgu/Talep Ekle';
    
    // --- GÜNCELLEME 1: "Giren Kullanıcı" adını, yeni bulgu ise mevcut kullanıcıdan al, değilse mevcut kayıttan al ---
    const girenKullaniciAdi = !isEdit && currentUser ? `${currentUser.name} ${currentUser.surname}` : (bulgu.girenKullanici || '');

    const selectedVendorId = bulgu.vendorId || '';
    const selectedModelIds = (bulgu.modelIds && typeof bulgu.modelIds === 'string') ? bulgu.modelIds.split(',').map(s => s.trim()) : (bulgu.modelIds || []);
    const selectedCozumVersiyonId = bulgu.cozumVersiyonId || '';

    const vendorOptions = vendors.map(v => `<option value="${v.id}" ${selectedVendorId == v.id ? 'selected' : ''}>${v.name}</option>`).join('');
    
    const filteredVersions = isEdit ? versions.filter(v => v.vendorId == selectedVendorId) : [];
    const versionOptions = filteredVersions.map(v => `<option value="${v.id}" ${selectedCozumVersiyonId == v.id ? 'selected' : ''}>${v.versionNumber}</option>`).join('');

    const statusOptions = ['Açık', 'Test Edilecek', 'Kapalı'].map(s => `<option value="${s}" ${bulgu.status === s ? 'selected' : ''}>${s}</option>`).join('');
    const bulguTipiOptions = ['Program Hatası', 'Yeni Talep'].map(t => `<option value="${t}" ${bulgu.bulguTipi === t ? 'selected' : ''}>${t}</option>`).join('');
    const etkiSeviyesiOptions = ['Düşük', 'Orta', 'Yüksek'].map(e => `<option value="${e}" ${bulgu.etkiSeviyesi === e ? 'selected' : ''}>${e}</option>`).join('');

    const filteredModels = isEdit ? models.filter(m => m.vendorId == selectedVendorId) : [];
    const modelCheckboxesHTML = filteredModels.map(m => {
        const displayName = m.code ? `${m.name} (${m.code})` : m.name;
        return `
        <div class="flex items-center">
            <input type="checkbox" id="model-${m.id}" value="${m.id}" class="h-4 w-4 rounded border-gray-300 model-checkbox" ${selectedModelIds.includes(String(m.id)) ? 'checked' : ''}>
            <label for="model-${m.id}" class="ml-2 block text-sm text-gray-900">${displayName}</label>
        </div>
    `;
    }).join('');

    const attachmentsHtml = attachments.map(att => `
        <div class="flex items-center justify-between text-sm py-1" id="attachment-${att.id}">
            <a href="/${att.filePath.replace(/\\/g, '/')}" target="_blank" class="text-blue-600 hover:underline truncate pr-2 flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                ${att.originalName}
            </a>
            <button type="button" class="delete-attachment-btn text-red-500 hover:text-red-700 p-1 flex-shrink-0" data-attachment-id="${att.id}">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    `).join('');

    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-3xl transform transition-all flex flex-col max-h-full">
                
                <div class="relative flex items-center justify-between p-4 border-b rounded-t-md bg-gray-50">
                    <div class="flex items-center gap-3">
                        <h3 class="text-xl font-semibold text-gray-800">${title}</h3>
                        ${isEdit && bulgu.bulguTipi ? `<span class="${getBadgeClassForModal(bulgu.bulguTipi)}">${bulgu.bulguTipi}</span>` : ''}
                    </div>
                    <button type="button" class="cancel-modal-btn absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <div class="p-6 overflow-y-auto">
                    <form id="bulgu-form" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            ${createEnhancedField({
                                id: 'bulgu-baslik',
                                label: 'Başlık',
                                type: 'text',
                                value: bulgu.baslik || '',
                                required: true,
                                iconType: 'text'
                            })}
                            <div class="modal-input-group">
                                <label for="bulgu-vendor-id">
                                    ${getFieldIcon('building')}
                                    Vendor <span class="text-red-500">*</span>
                                </label>
                                <select id="bulgu-vendor-id" required ${isEdit ? 'disabled' : ''}>
                                    <option value="">Seçiniz...</option>
                                    ${vendorOptions}
                                </select>
                            </div>
                            <div class="modal-input-group">
                                <label for="bulgu-tipi">
                                    ${getFieldIcon('tag')}
                                    Bulgu Tipi (Zorunlu) <span class="text-red-500">*</span>
                                </label>
                                <select id="bulgu-tipi" required>${bulguTipiOptions}</select>
                            </div>
                            <div class="modal-input-group">
                                <label for="bulgu-etki-seviyesi">
                                    ${getFieldIcon('level')}
                                    Etki Seviyesi <span class="text-red-500">*</span>
                                </label>
                                <select id="bulgu-etki-seviyesi" required>${etkiSeviyesiOptions}</select>
                            </div>
                            ${createEnhancedField({
                                id: 'bulgu-tespit-tarihi',
                                label: 'Tespit Tarihi',
                                type: 'date',
                                value: bulgu.tespitTarihi || '',
                                required: true,
                                iconType: 'date'
                            })}
                            <div class="modal-input-group">
                                <label for="bulgu-status">
                                    ${getFieldIcon('status')}
                                    Durum
                                </label>
                                <select id="bulgu-status" ${!isEdit ? 'disabled' : ''}>${statusOptions}</select>
                            </div>
                            <div class="modal-input-group">
                                <label for="bulgu-cozum-versiyon-id">
                                    ${getFieldIcon('version')}
                                    Çözüm Beklenen Versiyon
                                </label>
                                <select id="bulgu-cozum-versiyon-id">
                                    <option value="">Önce vendor seçin...</option>
                                    ${versionOptions}
                                </select>
                            </div>
                            ${createEnhancedField({
                                id: 'bulgu-vendor-tracker-no',
                                label: 'Vendor Takip No',
                                type: 'text',
                                value: bulgu.vendorTrackerNo || '',
                                iconType: 'number'
                            })}
                            ${createEnhancedField({
                                id: 'bulgu-giren-kullanici',
                                label: 'Giren Kullanıcı',
                                type: 'text',
                                value: girenKullaniciAdi,
                                readonly: true,
                                iconType: 'user',
                                className: 'bg-gray-100'
                            })}
                        </div>
                        <div id="onay-fields-container" class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 ${bulgu.status === 'Kapalı' ? '' : 'hidden'}">
                            ${createEnhancedField({
                                id: 'bulgu-cozum-onaylayan-kullanici',
                                label: 'Çözüm Onaylayan Kullanıcı',
                                type: 'text',
                                value: bulgu.cozumOnaylayanKullanici || '',
                                readonly: true,
                                iconType: 'user',
                                className: 'bg-gray-100'
                            })}
                            ${createEnhancedField({
                                id: 'bulgu-cozum-onay-tarihi',
                                label: 'Çözüm Onay Tarihi',
                                type: 'date',
                                value: bulgu.cozumOnayTarihi || '',
                                iconType: 'date'
                            })}
                            <div class="md:col-span-2">
                                ${createEnhancedField({
                                    id: 'bulgu-cozum-onay-aciklama',
                                    label: 'Onay Açıklaması',
                                    type: 'textarea',
                                    value: bulgu.cozumOnayAciklamasi || '',
                                    rows: 3,
                                    iconType: 'textarea'
                                })}
                            </div>
                        </div>
                        <div class="modal-input-group">
                            <label class="flex items-center gap-2">
                                ${getFieldIcon('building')}
                                Etkilenen Modeller
                            </label>
                            <div class="mt-1 border rounded-md p-2">
                                 <div class="flex items-center border-b pb-2 mb-2">
                                    <input type="checkbox" id="select-all-models" class="h-4 w-4 rounded border-gray-300">
                                    <label for="select-all-models" class="ml-2 block text-sm font-medium text-gray-900">Hepsini Seç / Bırak</label>
                                </div>
                                <div id="bulgu-models-container" class="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-32 overflow-y-auto">
                                    ${isEdit ? modelCheckboxesHTML : '<p class="text-xs text-gray-500 col-span-full">Modelleri görmek için bir vendor seçin.</p>'}
                                </div>
                            </div>
                        </div>
                        ${createEnhancedField({
                            id: 'bulgu-detayli-aciklama',
                            label: 'Detaylı Açıklama',
                            type: 'textarea',
                            value: bulgu.detayliAciklama || '',
                            rows: 4,
                            iconType: 'textarea'
                        })}
                        ${createEnhancedField({
                            id: 'bulgu-notlar',
                            label: 'Notlar',
                            type: 'textarea',
                            value: bulgu.notlar || '',
                            rows: 3,
                            iconType: 'textarea'
                        })}
                        <div class="modal-input-group">
                            <label class="flex items-center gap-2">
                                ${getFieldIcon('file')}
                                ${isEdit ? 'Ekli Dosyalar' : 'Dosya Ekle'}
                            </label>
                            ${isEdit ? `
                            <div id="attachments-list" class="mt-1 border rounded-md p-2 bg-gray-50 max-h-32 overflow-y-auto">
                                ${attachments.length > 0 ? attachmentsHtml : '<p class="text-xs text-gray-500 text-center py-2">Ekli dosya yok.</p>'}
                            </div>
                            ` : ''}
                            <div class="mt-2">
                                ${isEdit ? `<label for="bulgu-attachments" class="block text-sm font-medium text-gray-700 mb-1">Yeni Dosya Yükle</label>` : ''}
                                <input type="file" id="bulgu-attachments" name="attachments" multiple 
                                       accept=".txt,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" 
                                       class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                                <p class="text-xs text-gray-500 mt-1">
                                    İzin verilen formatlar: txt, doc, docx, xls, xlsx, png, jpg, jpeg • Maksimum dosya boyutu: 3 MB
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50 gap-2">
                    <button type="button" class="cancel-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                    <button type="submit" form="bulgu-form" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">${isEdit ? 'Değişiklikleri Kaydet' : 'Kaydet'}</button>
                </div>
            </div>
        </div>`;
}

    function getVendorContactsModalHTML(vendor, contacts = []) {
    const copyIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all flex flex-col max-h-full">
                <div class="relative flex items-center justify-center p-4 border-b rounded-t-md bg-gray-50">
                    <h3 class="text-xl font-semibold text-gray-800">${vendor.name} İletişim Kişileri</h3>
                    <button type="button" class="cancel-modal-btn absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="p-6 overflow-y-auto">
                    ${contacts.length > 0 ? contacts.map(contact => `
                        <div class="flex justify-between items-center py-2 border-b last:border-none">
                            <div>
                                <p class="font-medium">${contact.name} ${contact.preferred ? '<span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Birincil</span>' : ''}</p>
                                <p class="text-sm text-gray-600">${contact.email || ''} ${contact.phone ? `(${contact.phone})` : ''}</p>
                            </div>
                            ${contact.email ? `
                            <div>
                                <button title="E-postayı kopyala" class="copy-email-btn text-gray-500 hover:text-blue-600 p-1" data-email="${contact.email}">
                                    ${copyIconSvg}
                                </button>
                            </div>
                            ` : ''}
                        </div>
                    `).join('') : '<p class="text-sm text-gray-500 text-center">Henüz iletişim kişisi eklenmedi.</p>'}
                </div>
                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50">
                    <button type="button" class="cancel-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">Kapat</button>
                </div>
            </div>
        </div>`;
}

    function getFunctionModalHTML(fn = {}) {
    const isEdit = Boolean(fn && fn.id);
    const title = isEdit ? 'Fonksiyon Düzenle' : 'Yeni Fonksiyon Ekle';
        return `
            <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
                <div class="relative bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all flex flex-col">
                    <div class="relative flex items-center justify-center p-4 border-b rounded-t-md bg-gray-50">
                        <h3 class="text-xl font-semibold text-gray-800">${title}</h3>
                        <button type="button" class="cancel-modal-btn absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="p-6 overflow-y-auto">
                        <form id="function-form" class="space-y-4">
                            <input type="hidden" id="function-id" value="${fn.id || ''}">
                            ${createEnhancedField({
                                id: 'function-name',
                                label: 'Fonksiyon Adı',
                                type: 'text',
                                value: fn.name || '',
                                required: true,
                                iconType: 'text'
                            })}
                            ${createEnhancedField({
                                id: 'function-description',
                                label: 'Açıklama',
                                type: 'textarea',
                                value: fn.description || '',
                                rows: 3,
                                iconType: 'textarea'
                            })}
                        </form>
                    </div>
                    <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50 gap-2">
                        <button type="button" class="cancel-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                        <button type="submit" form="function-form" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">${isEdit ? 'Değişiklikleri Kaydet' : 'Kaydet'}</button>
                    </div>
                </div>
            </div>`;
    }

    function getFunctionSupportModalHTML(fn, vendors, models, versions, selectedVersionIds = []) {
        const selectedAttr = Array.isArray(selectedVersionIds) && selectedVersionIds.length > 0 ? selectedVersionIds.join(',') : '';
        const vendorOptions = ['<option value="">Vendor seçiniz...</option>'].concat(vendors.map(v => `<option value="${v.id}">${v.name}</option>`)).join('');
        return `
            <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
                <div class="relative bg-white rounded-lg shadow-xl w-full max-w-4xl transform transition-all flex flex-col max-h-full">
                    <div class="relative flex items-center justify-between p-4 border-b rounded-t-md bg-gray-50">
                        <h3 class="text-xl font-semibold text-gray-800">Fonksiyon Desteği: ${fn.name || ''}</h3>
                        <button type="button" class="cancel-modal-btn text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="p-6 overflow-y-auto">
                        <div id="function-support-modal" data-function-id="${fn.id}" data-selected-versions="${selectedAttr}">
                            <p class="text-sm text-gray-600">Seçtiğiniz vendor ve modellere göre bu fonksiyonun desteklediği versiyonları işaretleyebilirsiniz.</p>
                            <div class="mt-4 space-y-5">
                                <div>
                                    <label for="function-support-vendor" class="block text-sm font-medium text-gray-700">Vendor</label>
                                    <select id="function-support-vendor" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">${vendorOptions}</select>
                                </div>
                                <div>
                                    <div class="flex items-center justify-between">
                                        <label class="block text-sm font-medium text-gray-700">Modeller</label>
                                        <button type="button" id="function-support-clear-models" class="text-xs text-blue-600 hover:underline">Seçimleri temizle</button>
                                    </div>
                                    <div id="function-support-models" class="mt-2 border rounded-md p-3 max-h-40 overflow-y-auto bg-gray-50 text-sm text-gray-600">Vendor seçildikten sonra listelenecek.</div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Versiyonlar</label>
                                    <div id="function-support-versions" class="border rounded-md p-3 max-h-60 overflow-y-auto bg-gray-50 text-sm text-gray-600">Modeller seçildikten sonra listelenecek.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50 gap-2">
                        <button type="button" class="cancel-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                        <button type="button" id="function-support-save-btn" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">Kaydet</button>
                    </div>
                </div>
            </div>`;
    }

    function getDeleteConfirmModalHTML(message, subMessage = '') {
    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all text-center">
                <div class="p-6">
                    <svg class="mx-auto mb-4 w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 class="text-lg font-semibold text-gray-800">Emin misiniz?</h3>
                    <p class="mt-2 text-sm text-gray-600">${message}</p>
                    ${subMessage ? `<p class="mt-1 text-xs text-gray-500">${subMessage}</p>` : ''}
                </div>
                <div class="flex items-center justify-center p-4 border-t rounded-b-md bg-gray-50 gap-2">
                    <button id="cancel-delete" class="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                    <button id="confirm-delete" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium">Evet, Sil</button>
                </div>
            </div>
        </div>`;
}

    function getBulguImportModalHTML() {
    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-lg transform transition-all flex flex-col max-h-full">
                <div class="relative flex items-center justify-center p-4 border-b rounded-t-md bg-gray-50">
                    <h3 class="text-xl font-semibold text-gray-800">Bulgu İçeri Aktar</h3>
                    <button type="button" class="cancel-modal-btn absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="p-6">
                    <form id="bulgu-import-form" class="space-y-4">
                        <!-- Format Selection -->
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Dosya Formatı Seçin</label>
                            <div class="flex space-x-4 mb-4">
                                <label class="flex items-center">
                                    <input type="radio" name="importFormat" value="csv" checked class="mr-2">
                                    <span class="text-sm">CSV Dosyası</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" name="importFormat" value="json" class="mr-2">
                                    <span class="text-sm">JSON Dosyası (Önerilen)</span>
                                </label>
                            </div>
                        </div>

                        <!-- CSV Import Section -->
                        <div id="csv-import-section">
                            <div>
                                <label for="csv-file-input" class="block text-sm font-medium text-gray-700">CSV Dosyası Seçin</label>
                                <div class="mt-1 flex flex-col gap-2">
                                    <input type="file" id="csv-file-input" accept=".csv" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                                    <a href="./bulgu_sablon.csv" download class="text-sm text-blue-600 hover:underline">Şablon dosyasını indir</a>
                                    <div class="p-3 bg-blue-50 border border-blue-200 rounded-md">
                                        <p class="text-xs text-blue-800 font-medium mb-1">İçeri aktarma kuralları:</p>
                                        <ul class="text-xs text-blue-700 space-y-1">
                                            <li>• Virgül (,) içeren metinleri çift tırnak içinde yazın: "Metin, virgüllü"</li>
                                            <li>• "Açıklama" ve "Notlar" alanları uzun metinler içerebilir</li>
                                            <li>• Örnek formatı için şablon dosyasını inceleyin</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- JSON Import Section -->
                        <div id="json-import-section" style="display: none;">
                            <div>
                                <label for="json-file-input" class="block text-sm font-medium text-gray-700">JSON Dosyası Seçin</label>
                                <div class="mt-1 flex flex-col gap-2">
                                    <input type="file" id="json-file-input" accept=".json" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100">
                                    <button type="button" id="download-json-template" class="text-sm text-green-600 hover:underline text-left">JSON şablonu oluştur ve indir</button>
                                    <div class="p-3 bg-green-50 border border-green-200 rounded-md">
                                        <p class="text-xs text-green-800 font-medium mb-1">JSON Import Avantajları:</p>
                                        <ul class="text-xs text-green-700 space-y-1">
                                            <li>• Virgül, satır sonu ve özel karakterler için sorun yok</li>
                                            <li>• Çok daha güvenilir veri aktarımı</li>
                                            <li>• Karmaşık metinleri destekler</li>
                                            <li>• "Move 3500,IWL 250" gibi çoklu modeller problem yaratmaz</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div id="import-progress" class="hidden text-sm text-gray-600">
                            <p>Yükleniyor... <span id="progress-count">0</span>/<span id="total-records">0</span></p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div id="progress-bar" class="bg-blue-600 h-2.5 rounded-full" style="width: 0%"></div>
                            </div>
                        </div>
                        <div id="import-results" class="hidden p-3 border rounded-md bg-gray-50 max-h-40 overflow-y-auto text-sm"></div>
                    </form>
                </div>
                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50 gap-2">
                    <button type="button" class="cancel-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                    <button type="submit" form="bulgu-import-form" id="start-import-btn" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">İçeri Aktar</button>
                </div>
            </div>
        </div>`;
}

function getVersionModalHTML(vendors, models, version = {}) {
    const isEdit = version.id !== undefined;
    const title = isEdit ? 'Versiyon Düzenle' : 'Yeni Versiyon Ekle';
    const vendorOptions = vendors.map(v => `<option value="${v.id}" ${version.vendorId == v.id ? 'selected' : ''}>${v.name}</option>`).join('');
    
    const selectedModelIds = (version.modelIds && typeof version.modelIds === 'string') 
        ? version.modelIds.split(',').map(s => s.trim()) 
        : (version.modelIds || []);

    const filteredModels = isEdit ? models.filter(m => m.vendorId == version.vendorId) : [];

    const modelCheckboxesHTML = filteredModels.map(m => {
        const displayName = m.code ? `${m.name} (${m.code})` : m.name;
        return `
        <div class="flex items-center">
            <input type="checkbox" id="model-${m.id}" value="${m.id}" name="modelIds" class="h-4 w-4 rounded border-gray-300 model-checkbox" ${selectedModelIds.includes(String(m.id)) ? 'checked' : ''}>
            <label for="model-${m.id}" class="ml-2 block text-sm text-gray-900">${displayName}</label>
        </div>
    `;
    }).join('');

    const statusOptions = ['Test', 'Prod'].map(s => `<option value="${s}" ${version.status === s ? 'selected' : ''}>${s}</option>`).join('');

    return `
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 p-4">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-2xl transform transition-all flex flex-col max-h-full">
                
                <div class="relative flex items-center justify-center p-4 border-b rounded-t-md bg-gray-50">
                    <h3 class="text-xl font-semibold text-gray-800">${title}</h3>
                    <button type="button" class="cancel-modal-btn absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <div class="p-6 overflow-y-auto">
                    <form id="version-form" class="space-y-6">
                        <input type="hidden" id="version-id" value="${version.id || ''}">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div>
                                <label for="version-number" class="block text-sm font-medium text-gray-700">
                                    <svg class="icon inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                                    </svg>
                                    Versiyon Numarası
                                </label>
                                <input type="text" id="version-number" name="versionNumber" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" value="${version.versionNumber || ''}" required>
                            </div>
                            <div>
                                <label for="version-vendor-id" class="block text-sm font-medium text-gray-700">
                                    <svg class="icon inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                    </svg>
                                    Vendor
                                </label>
                                <select id="version-vendor-id" name="vendorId" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required>
                                    <option value="">Seçiniz...</option>
                                    ${vendorOptions}
                                </select>
                            </div>
                            <div>
                                <label for="version-delivery-date" class="block text-sm font-medium text-gray-700">
                                    <svg class="icon inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    Teslim Tarihi
                                </label>
                                <input type="date" id="version-delivery-date" name="deliveryDate" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" value="${version.deliveryDate || ''}" required>
                            </div>
                             <div>
                                <label for="version-status" class="block text-sm font-medium text-gray-700">
                                    <svg class="icon inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Durum
                                </label>
                                <select id="version-status" name="status" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" ${!isEdit ? 'disabled' : ''}>${statusOptions}</select>
                            </div>
                            <div>
                                <label for="version-prod-onay-date" class="block text-sm font-medium text-gray-700">
                                    <svg class="icon inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    Prod Onay Tarihi
                                </label>
                                <input type="date" id="version-prod-onay-date" name="prodOnayDate" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" value="${version.prodOnayDate || ''}" ${version.status !== 'Prod' ? 'disabled' : ''}>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">
                                <svg class="icon inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                                Geçerli Modeller
                            </label>
                            <div class="mt-1 border rounded-md p-2">
                                 <div class="flex items-center border-b pb-2 mb-2">
                                    <input type="checkbox" id="select-all-models" class="h-4 w-4 rounded border-gray-300">
                                    <label for="select-all-models" class="ml-2 block text-sm font-medium text-gray-900">Hepsini Seç / Bırak</label>
                                </div>
                                <div id="version-models-container" class="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                                    ${modelCheckboxesHTML || '<p class="text-xs text-gray-500 col-span-2">Modelleri görmek için bir vendor seçin.</p>'}
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="version-bug-istek-tarihcesi" class="block text-sm font-medium text-gray-700">
                                <svg class="icon inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                Bug/İstek Tarihçesi
                            </label>
                            <textarea id="version-bug-istek-tarihcesi" name="bugIstekTarihcesi" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">${version.bugIstekTarihcesi || ''}</textarea>
                        </div>
                        <div>
                            <label for="version-ekler" class="block text-sm font-medium text-gray-700">
                                <svg class="icon inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                Notlar
                            </label>
                            <textarea id="version-ekler" name="ekler" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">${version.ekler || ''}</textarea>
                        </div>
                    </form>
                </div>

                <div class="flex items-center justify-end p-4 border-t rounded-b-md bg-gray-50 gap-2">
                    <button type="button" class="cancel-modal-btn px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">İptal</button>
                    <button type="submit" form="version-form" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">${isEdit ? 'Değişiklikleri Kaydet' : 'Kaydet'}</button>
                </div>
            </div>
        </div>`;
}

