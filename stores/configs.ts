import routeConfig from "assets/scripts/configs/routeConfig";
import availableAppRoutes, {headerRoutes} from "assets/scripts/constants/availableAppRoutes";
export const useConfigsStore = defineStore('configs', {
    state: () => ({
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
            const {path} = useRoute();
            useRouter().push(path);
        }
    }
});

