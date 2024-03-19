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

    await axiosInstance.post('/v1/user/signup', payload)
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

export async function forgotPasswordService(payload: { email: string | null }){
    let data = {};
    await axiosInstance.post('/v1/user/forgot_password', payload)
        .then(response => {
            data = response.data.data;
        });

    return { data };
}