import {useAuthStore} from "~/stores/user/auth";
import {deepCopy} from "~/utils/helpers/generalHelpers";
import type {EditUserAccountFormModel} from "~/constants/types/models/editUserAccountFormModels";
import {editUserData} from "~/services/user";

const model: EditUserAccountFormModel = {
    formData: {
        fullname: '',
        email: '',
        bio: '',
        birthday: '',
        phone: ''
    },
    saveProgressIsLoading: false
}

export const useEditUserAccountStore = defineStore('editUserAccountStore', {
    state: () => (model),
    actions: {
        getUserAccountData() {
            const { details } = useAuthStore().modelAuth;
            const authDetailsData = deepCopy(details)
            Object.keys(this.formData).forEach((key: any) => {
                // @ts-ignore
                this.formData[key] = authDetailsData[key];
                if(key === "birthday" && authDetailsData[key] && authDetailsData[key].split('T')[0]){
                    // @ts-ignore
                    this.formData[key] = authDetailsData[key].split('T')[0];
                }
            })
        },
        async saveEditUserAccount() {
            this.saveProgressIsLoading = true;
            await editUserData(this.formData)
                .then(() => {
                    window.location.reload();
                })
                .finally(() => {
                    this.saveProgressIsLoading = false;
                })
        }
    }
});
