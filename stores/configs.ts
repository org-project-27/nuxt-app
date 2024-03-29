import routeConfig from "assets/scripts/configs/routeConfig";
import availableAppRoutes, {headerRoutes} from "assets/scripts/constants/availableAppRoutes";
export const useConfigsStore = defineStore('configs', {
    state: () => ({
        deviceType: null,
        routeConfig,
        appRoutes: {
            availableAppRoutes,
            headerRoutes
        },
        currentRoute: {}
    }),
    actions: {
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
        }
    }
});

