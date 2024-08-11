import type {ToastElementType} from "~/constants/types/defaultTypes";
import {generateUniqueId} from "~/utils/helpers/generalHelpers";
import {clearTimeout} from "node:timers";

const model: {
    toasts: { [key: string]: ToastElementType; },
} = {
    toasts: {},
};

export const useNotificationToast = defineStore('notificationToast', {
    state: () => (model),
    actions: {
        setToast(toast: ToastElementType, toastId: string | number | null = null) {
            if(!toastId) {
                toastId = generateUniqueId();
            }
            this.toasts[toastId] = toast;

            if(toast.timeout && toast.timeout > 0) {
                setTimeout(() => {
                    this.deleteToast(toastId);
                }, toast.timeout + 1000);
            }
        },
        deleteToast(toastId: string | number) {
            delete this.toasts[toastId];
        }
    }
});