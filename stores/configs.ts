export const useConfigsStore = defineStore('configs', {
    state: () => ({
        deviceType: null,
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
        }
    }
});

