import {
    defaults,
    models,
    type TokensModel,
    type SignupResponseModel,
    type LoginResponseModel,
    type AuthResponseModel,
} from "assets/scripts/types/models/userAuthModels"
import {
    authService,
    loginService,
    signupService,
    forgotPasswordService,
} from "~/services/user";
export const useAuthStore = defineStore('authStore', {
    state: () => (models),
    getters: {
        isAuthenticated(state){
            // #TODO: Configure user is really auth or not
            return !!state.modelAuth.user_id;
        },
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
            } catch(error){
                console.log('Auth error', error);
                this.resetTokensOnLocalStorage();
                this.modelAuth = defaults.defaultResponses.auth();
            } finally {
                this.setAuthProgressIsLoading(false);
                this.resetModelLogin();
            }
            return this.modelAuth;
        },
        // #TODO: Add a response type for function
        async submitForgotPassword() {
            try {
                const data = await forgotPasswordService({ email: this.modelForgotPassword.email });
                console.log(data);
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
        logout() : void {
            this.resetAllModels();
            window.location.reload();
        }
    }
});