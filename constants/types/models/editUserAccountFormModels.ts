export type EditUserAccountForm = {
    fullname: any;
    email: any;
    bio: any;
    birthday: any;
    phone: any;
}
export type EditUserAccountFormModel = {
    formData: EditUserAccountForm;
    saveProgressIsLoading: boolean;
}