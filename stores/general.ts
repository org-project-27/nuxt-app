import type {CurrentRoute, GeneralModel} from "~/constants/types/GeneralStoreTypes";

const model: GeneralModel = {
    renderId: 0,
    currentRoute: {
        path: null,
        configs: {},
        readyForView: null
    },
}
export const useGeneralStore = defineStore('generalStore', {
    state: () => (model),
    actions: {
        reRenderApp(): void {
            const tId = setTimeout(() => {
                this.renderId = tId;
                clearTimeout(tId);
                this.currentRoute.readyForView = true;
            }, 500);
        },
        setCurrentRoute(payload: CurrentRoute): void {
            this.currentRoute = payload;
            this.renderId = this.currentRoute.path;
        },
        setPageIsLoading(payload: boolean | null): void {
            this.currentRoute.readyForView = payload
        }
    }
});