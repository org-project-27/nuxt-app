import {
    type AuthResponseModel,
    defaults,
    type LoginResponseModel,
    models,
    type SignupResponseModel,
    type TokensModel,
} from "~/constants/types/models/userAuthModels"
import {authService, forgotPasswordService, loginService, logoutService, signupService,} from "~/services/user";
import type {DefaultResponseDataType} from "~/constants/types/defaultTypes";

export const useAuthStore = defineStore('authStore', {
    state: () => (models),
    getters: {
        isAuthenticated(state){
            // #TODO: Configure user is really auth or not
            return !!state.modelAuth.user_id || false;
        },
        userId(state) {
            return state.modelAuth.user_id || null;
        }
    },
    actions: {
        resetModelSignup() : void {
            this.modelSignup = defaults.defaultSignup();
        },
        resetModelLogin() : void {
            this.modelLogin = defaults.defaultLogin();
        },
        resetModelAuth() : void {
            this.modelAuth = defaults.defaultResponses.auth();
        },
        resetModelForgotPassword() : void {
            this.modelForgotPassword = defaults.defaultForgotPassword()
        },
        async submitLogin() : Promise<LoginResponseModel> {
            this.resetModelAuth();
            this.resetTokensOnLocalStorage();
            const { data, tokens } = await loginService(this.modelLogin);
            this.setTokenToLocalStorage(tokens);
            return data;
        },
        async submitSignup() : Promise<SignupResponseModel> {
            const { data } = await signupService(this.modelSignup);
            return data;
        },
        async authUser() : Promise<AuthResponseModel> {
            try {
                const { data } = await authService();
                this.modelAuth = { ...data };
                const { preferred_lang } = this.modelAuth.details;
                if(preferred_lang){
                    useI18nStore().setAppLang(preferred_lang);
                }
            } catch(error){
                this.resetTokensOnLocalStorage();
                this.modelAuth = defaults.defaultResponses.auth();
            } finally {
                this.setAuthProgressIsLoading(false);
                this.resetModelLogin();
            }
            return this.modelAuth;
        },
        async submitForgotPassword() : Promise<DefaultResponseDataType> {
            try {
                return await forgotPasswordService({email: this.modelForgotPassword.email});
            } catch (error){
                throw error;
            }
        },
        syncTokensFromLocalStorage() : TokensModel {
            const data : any = defaults.defaultResponses.tokens();
            Object.keys(data).forEach((key: string) => {
                const value = localStorage.getItem(key);
                if(value && !isNaN(Number(value))){
                    data[key] = Number(value) || 0;
                } else {
                    data[key] = value || null;
                }
            });
            this.modelToken = {...data};

            return this.modelToken;
        },
        setTokenToLocalStorage(data: TokensModel = { ...defaults.defaultResponses.tokens() }) {
            Object.entries(data).forEach(([key, value]) => {
               localStorage.removeItem(key);
               if(value) localStorage.setItem(key, value);
            });
            this.syncTokensFromLocalStorage();
        },
        resetTokensOnLocalStorage() : void {
            this.setTokenToLocalStorage();
        },
        setAuthProgressIsLoading(value: boolean){
            this.authProgressIsLoading = value;
        },
        setAfterAuthPath(path: string){
            this.afterAuthPath = path;
        },
        resetAllModels(){
            this.resetTokensOnLocalStorage();
            this.resetModelAuth();
            this.resetModelLogin();
            this.resetModelSignup();
        },
        async logout() {
            await logoutService();
            this.resetAllModels();
            window.location.reload();
        }
    }
});