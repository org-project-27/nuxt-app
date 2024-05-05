import { createI18n } from 'vue-i18n';
import type {AvailableLocalItem, AvailableLocals, LangOptionsType} from "assets/scripts/types/LocalesType";
import {availableLocales} from "assets/scripts/constants/locales";

let appLang: LangOptionsType;

export const useI18nStore = defineStore('i18n', {
    state: () => ({
        appLang,
        availableLocales
    }),
    getters: {
      i18n(state){
          let messages: any = {};

          state.availableLocales.forEach((local: AvailableLocalItem) => {
              messages[`${local.iso}`] = local.messages;
          })

          return createI18n({
              legacy: false,
              globalInjection: true,
              locale: state.appLang,
              // @ts-ignore
              messages,
          });
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