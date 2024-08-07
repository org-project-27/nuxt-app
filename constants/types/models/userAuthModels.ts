import { deepCopy } from "~/utils/helpers/generalHelpers";
import type {LangOptionsType} from "~/constants/types/LocalesType";

// Signup data modeling:
export interface Signup extends Login {
    fullname: string | null;
}
const signup: Signup = {
    fullname: null,
    email: null,
    password: null,
};

// Login data modeling:
export interface Login {
    email: string | null,
    password: string | null
}
const login: Login = {
    email: null,
    password: null,
};

// Tokens data modeling:
export interface TokensModel {
    access_token: string | null,
    refresh_token: string | null,
    expires_in: number | null
}

const tokensResponse: TokensModel = {
    access_token: null,
    refresh_token: null,
    expires_in: 0
};

// Forgot password data modeling
export interface ResetPasswordModel {
    newPassword: string | null;
    confirmPassword: string | null;
}

export interface ForgotPasswordModel {
    email: string | null
    resetPassword: ResetPasswordModel
}

const forgotPassword: ForgotPasswordModel = {
    email: null,
    resetPassword: {
        newPassword: null,
        confirmPassword: null
    }
}

// --- Back Responses ---

// Signup response data modeling:
export interface SignupResponseModel {
    record_id: number | null,
    message: string | null,
    success: boolean | null,
    email: string | null
}
const signupResponse: SignupResponseModel = {
    record_id: null,
    message: null,
    success: null,
    email: null
};

// Login response data modeling:
export interface LoginResponseModel {
    message: string | null,
    success: string | null,
    data: TokensModel | null
}
const loginResponse: LoginResponseModel = {
    message: null,
    success: null,
    data: tokensResponse
};

// Auth response data modeling:
export interface AuthResponseModel {
    user_id: number | null,
    details: {
        email: string | null,
        fullname: string | null,
        preferred_lang: LangOptionsType | null;
        phone: string | null;
        birthday: Date | null;
        description: string | null;
        email_registered: boolean | null;
        bio: string | null;
        profile_photo_id: string | null;
    }
}
const auth: AuthResponseModel = {
    user_id: null,
    details: {
        email: null,
        fullname: null,
        preferred_lang: null,
        phone: null,
        birthday: null,
        description: null,
        email_registered: true,
        bio: null,
        profile_photo_id: 'nophoto.png'
    }
}

const getModelSignup = () : Signup => deepCopy(signup);
const getModelLogin = () : Login  => deepCopy(login);
const getModelAuthResponse = () : AuthResponseModel => deepCopy(auth);
const getModelTokensResponse = () : TokensModel => deepCopy(tokensResponse);
const getModelSignupResponse = () : SignupResponseModel => deepCopy(signupResponse);
const getModelLoginResponse = () : LoginResponseModel => deepCopy(loginResponse);
const getModelForgotPassword = () : ForgotPasswordModel => deepCopy(forgotPassword);

export const models: {
    authProgressIsLoading: boolean | null,
    afterAuthPath: string,
    modelAuth: AuthResponseModel,
    modelToken: TokensModel | any,
    modelSignup: Signup,
    modelLogin: Login,
    modelForgotPassword: ForgotPasswordModel
} = {
    authProgressIsLoading: null,
    afterAuthPath: '/account/user',
    modelAuth: getModelAuthResponse(),
    modelToken: getModelTokensResponse(),
    modelSignup: getModelSignup(),
    modelLogin: getModelLogin(),
    modelForgotPassword: getModelForgotPassword()
}
export const defaults = {
    defaultSignup: getModelSignup,
    defaultLogin: getModelLogin,
    defaultForgotPassword: getModelForgotPassword,
    defaultResponses: {
        auth: getModelAuthResponse,
        tokens: getModelTokensResponse,
        signup: getModelSignupResponse,
        login: getModelLoginResponse,
    }
}