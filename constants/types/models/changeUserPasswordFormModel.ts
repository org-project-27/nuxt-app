export type ChangeUserPasswordForm= {
    newPassword: any;
    confirmPassword: any;
    currentPassword: any;
}

export type ChangeUserPasswordFormModel = {
    formData: ChangeUserPasswordForm;
    saveProgressIsLoading: boolean;
}