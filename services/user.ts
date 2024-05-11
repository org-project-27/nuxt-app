import { axiosInstance } from "~/services/queryManager";
import { defaults } from "assets/scripts/types/models/userAuthModels";
import type {
    Login,
    Signup,
    TokensModel,
    AuthResponseModel,
    SignupResponseModel,
    LoginResponseModel
} from "assets/scripts/types/models/userAuthModels";
import type {DefaultResponseDataType, DefaultResponseType} from "assets/scripts/types/defaultTypes";
import type {LangOptionsType} from "assets/scripts/types/LocalesType";


export async function loginService(payload : Login) {
    let tokens : TokensModel = defaults.defaultResponses.tokens();
    let data : LoginResponseModel = defaults.defaultResponses.login();

    await axiosInstance.post('/v1/user/login', payload)
        .then(async response => {
            tokens = response.data.data;
            //delete response.data.data;
            data = { ...response.data };
        })
        .catch((error) => {
            if(error.response) data = error.response.data
        });

    return { tokens, data };
}

export async function signupService(payload: Signup){
    let data : SignupResponseModel = defaults.defaultResponses.signup();
    await axiosInstance.post('/v1/user/signup', {...payload, preferred_lang: useI18nStore().appLang})
        .then(response => {
            if(response.data) data = response.data;
        })
        .catch(error => {
            if(error.response) data = error.response.data
        });

    return { data };
}

export async function authService(){
    let data: AuthResponseModel = defaults.defaultResponses.auth();

    await axiosInstance.get('/v1/user/auth')
        .then(response => {
            data = response.data.data
        });
    return { data };
}

export async function forgotPasswordService(payload: { email: string | null }) : Promise<DefaultResponseDataType>{
    let data: DefaultResponseType = {
        success: false,
        message: "SOMETHING_WENT_WRONG"
    };

    await axiosInstance.post('/v1/user/forgot_password', payload)
        .then(response => {
            data = response.data;
        })
        .catch(error => {
            data = error.response.data;
        })

    return { data };
}

export async function confirmEmailService(payload: { token: string | null } ) {
    const { token } = payload;
    let data = {};
    await axiosInstance.get('/v1/user/confirm_email', { params: { token } })
        .then(response => {
            data = response.data;
        });
    return { data };
}

export async function resetPasswordTokenVerifyService(payload: { token: string | null } ) {
    const { token } = payload;
    let data = {};
    await axiosInstance.get('/v1/user/reset_password', { params: { token } })
        .then(response => {
            data = response.data;
        });
    return { data };
}

export async function resetPasswordService(payload: { new_password: string, token: string | null } ) {
    const { token, new_password } = payload;
    let data = {};
    if(token && new_password){
        await axiosInstance.post('/v1/user/reset_password', { ...payload })
            .then(response => {
                data = response.data;
            });
    }
    return { data };
}

export async function setUserPreferredLang(payload: { user_id: number, lang: LangOptionsType }){
    await axiosInstance.put('/v1/user/preferred_lang', {...payload});
}