// plugins/device-detection.js
export default defineNuxtPlugin(nuxtApp => {
    const detectDevice = (resolve: any, reject: any) => {
        const width = window?.innerWidth;
        const sizes = {
            'large-desktop': 2000,  // For larger desktops
            'desktop': 1250,        // For desktops
            'tablet': 600,          // For full-sized tablets
            'mobile': 325,          // For larger phones
            'small-mobile': 100,    // For smaller phones
        };

        if (width >= sizes['large-desktop']) {
            resolve('large-desktop');
        } else if (width >= sizes['desktop'] && width < sizes['large-desktop']) {
            resolve('desktop');
        } else if (width >= sizes['tablet'] && width < sizes['desktop']) {
            resolve('tablet');
        } else if (width >= sizes['mobile'] && width < sizes['tablet']) {
            resolve('mobile');
        } else if (width >= sizes['small-mobile'] && width < sizes['mobile']) {
            resolve('small-mobile');
        } else {
            reject(null);
        }
    };

    let detectDeviceType = new Promise(detectDevice);
    nuxtApp.provide('detectDeviceType', detectDeviceType);
});
