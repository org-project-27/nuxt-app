export function generateUniqueId(length = 5) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export function toKebabCase(str) {
    return str
        .replace(/\s+/g, '-')
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '');
}

export function stringToElement(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body.firstChild;
}

export function deepCopy(model){
    return JSON.parse(JSON.stringify(model));
}

export function developerAnnounce(message, type = 'error'){
    console[type](`🔴[Developer warn]: ${message}`);
}

export function backendMessage(message = ''){
    const { i18n} =  useI18nStore();
    return i18n.global.t(`backend_messages.${message}`);
}