// plugins/local-storage.client.ts

export default defineNuxtPlugin((nuxtApp) => {
    const localStorageAvailable = typeof window !== 'undefined' && window.localStorage;

    nuxtApp.provide('localStorage', {
        setItem(key: string, value: string): void {
            if (localStorageAvailable) {
                window.localStorage.setItem(key, value);
            }
        },
        getItem(key: string): string | null {
            if (localStorageAvailable) {
                return window.localStorage.getItem(key) || null;
            }
            return null;
        },
        removeItem(key: string): void {
            if (localStorageAvailable) {
                window.localStorage.removeItem(key);
            }
        }
    });
});
