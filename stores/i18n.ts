import {createI18n, useI18n} from 'vue-i18n';
import type {AvailableLocalItem, AvailableLocals, LangOptionsType} from "assets/scripts/types/LocalesType";
import {availableLocales} from "assets/scripts/constants/locales";
import {setUserPreferredLangService} from "~/services/user";

let appLang: LangOptionsType;

export const useI18nStore = defineStore('i18n', {
    state: () => ({
        appLang,
        availableLocales,
    }),
    getters: {
        i18n(state) {
            let messages: any = {};

            state.availableLocales.forEach((local: AvailableLocalItem) => {
                messages[`${local.iso}`] = local.messages;
            })

            return createI18n({
                legacy: false,
                globalInjection: true,
                locale: state.appLang || useAppConfig().defaultAppLang,
                // @ts-ignore
                messages,
            });
        },
    },
    actions: {
        setAppLang(lang: LangOptionsType) {
            this.appLang = lang;
            localStorage.setItem('system_lang', lang);
            this.i18n.global.locale.value = lang;
            const {isAuthenticated, modelAuth} = useAuthStore();
            const { user_id, details} = modelAuth;
            if(isAuthenticated && details.preferred_lang !== lang){
                setUserPreferredLangService({
                    lang: lang,
                    user_id: user_id || 0
                });
            }
            return lang;
        },
        detectCurrentAppLang(): LangOptionsType {
            // @ts-ignore
            const appLangFromLS: LangOptionsType = localStorage.getItem('system_lang');
            const defaultAppLang = useAppConfig().defaultAppLang;
            let detectedAppLang: LangOptionsType;

            if (this.appLang) {
                detectedAppLang = this.appLang;
            } else if (appLangFromLS) {
                detectedAppLang = appLangFromLS;
            } else if (defaultAppLang) {
                detectedAppLang = defaultAppLang;
            } else {
                detectedAppLang = availableLocales[0].iso;
            }

            this.appLang = detectedAppLang;
            return detectedAppLang;
        }
    }
});