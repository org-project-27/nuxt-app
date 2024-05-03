import routeConfig from "assets/scripts/configs/routeConfig";
import availableAppRoutes, {headerRoutes} from "assets/scripts/constants/availableAppRoutes";
import type {LangOptionsType} from "assets/scripts/types/LocalesType";
import {i18n} from "~/plugins/i18n";

let appLang: LangOptionsType;
export const useConfigsStore = defineStore('configs', {
    state: () => ({
        appLang,
        renderKey: 1,
        deviceType: null,
        routeConfig,
        appRoutes: {
            availableAppRoutes,
            headerRoutes
        },
        currentRoute: {}
    }),
    actions: {
        setAppLang(lang: LangOptionsType){
            this.appLang = lang;
            localStorage.setItem('system_lang', lang);
            this.reRenderApp();
        },
        detectDeviceType(): void {
            // @ts-ignore
            useNuxtApp().$detectDeviceType
                .then((res: null) => {
                    this.deviceType = res;
                })
                .catch(() => {
                    this.deviceType = null;
                })
        },
        setCurrentRoute(payload: object){
            this.currentRoute = {...payload};
        },
        reRenderApp(){
            this.renderKey++;
        }
    }
});

