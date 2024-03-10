interface FullscreenStateType {
    status: boolean;
    view: object;
}

const model: FullscreenStateType = {
    status: false,
    view: {},
}

export const useFullscreenModal = defineStore('fullscreen-modal', {
    state: () => ({...model}),
    actions: {
        setStatus(payload: boolean): void {
            this.status = payload;
            if(payload) {
                this.view = {};
            }
        },
        setView(payload: any): void {
            if(payload) {
                this.view = markRaw(payload)
            } else {
                this.view = {};
                this.setStatus(false);
            }
        }
    }
});