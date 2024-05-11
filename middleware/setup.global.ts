import {useI18nStore, useServiceManagementStore} from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
    if(process.client){
        useServiceManagementStore();
        const { detectCurrentAppLang, setAppLang, i18n} = useI18nStore();
        const detectedLang = detectCurrentAppLang();
        i18n.global.locale.value = setAppLang(detectedLang);
    }
})

