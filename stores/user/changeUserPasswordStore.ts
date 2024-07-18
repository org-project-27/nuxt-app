import type {
    ChangeUserPasswordFormModel
} from "~/constants/types/models/changeUserPasswordFormModel";
import {changePassword} from "~/services/user";

const model: ChangeUserPasswordFormModel = {
    formData: {
        currentPassword: null,
        newPassword: null,
        confirmPassword: null,
    },
    saveProgressIsLoading: false
}

export const useChangeUserPasswordStore = defineStore('changeUserPasswordStore', {
    state: () => (model),
    actions: {
        async changeUserPassword() {
            this.saveProgressIsLoading = true;
            await changePassword(this.formData)
                .then(() => {
                    window.location.reload();
                })
                .finally(() => {
                    this.saveProgressIsLoading = false;
                });
        }
    }
});
