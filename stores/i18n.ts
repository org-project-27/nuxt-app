import type {LangOptionsType} from "assets/scripts/types/LocalesType";
import en from "assets/locales/en";
import az from "assets/locales/az";
import ru from "assets/locales/ru";
import { createI18n } from 'vue-i18n';

let appLang: LangOptionsType;
export const useI18nStore = defineStore('i18n', {
    state: () => ({
        appLang,
    }),
    getters: {
      i18n(state){
          const langParams = {
              legacy: false,
                  globalInjection: true,
                  locale: state.appLang,
                  messages: { en, az, ru }
          };
          return createI18n(langParams);
      }
    },
    actions: {
        setAppLang(lang: LangOptionsType){
            this.appLang = lang;
            localStorage.setItem('system_lang', lang);
            const {reRenderApp} = useConfigsStore();
            reRenderApp();
        },
    }
});