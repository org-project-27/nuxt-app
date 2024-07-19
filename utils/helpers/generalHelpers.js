import * as stream from "node:stream";
import { axiosConfigs } from "~/constants/configs/api.config";

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

export function deepEqualObjects(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqualObjects(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

export function deepEqualObjectsWithArray(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (obj1 === null || obj2 === null || typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        for (let i = 0; i < obj1.length; i++) {
            if (!deepEqualObjectsWithArray(obj1[i], obj2[i])) return false;
        }
        return true;
    } else if (Array.isArray(obj1) || Array.isArray(obj2)) {
        return false;  // One is an array and the other is not
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqualObjectsWithArray(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

export function getCDN(id) {
    if(id) {
        let origin = window.location.origin;
        origin = axiosConfigs.baseURL.replace('api', 'cdn')
        return `${origin}/${id}`;
    }
    return null;
}