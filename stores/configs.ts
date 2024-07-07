import availableAppRoutes, {headerRoutes} from "~/constants/availableAppRoutes";
export const useConfigsStore = defineStore('configs', {
    state: () => ({
        renderKey: 1,
        appRoutes: {
            availableAppRoutes,
            headerRoutes
        },
        currentRoute: {}
    }),
    actions: {
        setCurrentRoute(payload: object) {
            this.currentRoute = {...payload};
        },
        reRenderApp(delay: number = 500) {
            const tId = setTimeout(() => {
                // @ts-ignore
                this.renderKey = tId;
                clearTimeout(tId);
            }, delay);
        }
    }
});
