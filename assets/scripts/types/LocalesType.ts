interface BackendMessage {
    DONE: string;
    SOMETHING_WENT_WRONG: string;
    EMAIL_IS_EXIST: string;
    USER_REGISTRATION_FAILED: string;
    USER_SUCCESSFULLY_REGISTERED: string;
    EMAIL_SUCCESSFULLY_CONFIRMED: string;
    EMAIL_IS_NOT_VALID: string;
    INVALID_EMAIL: string;
    INVALID_PASSWORD: string;
    INVALID_FULLNAME: string;
    INVALID_TOKEN: string;
    BCRYPT_ERROR: string;
    USER_LOGIN_PROGRESS_FAILED: string;
    USER_SUCCESSFULLY_LOGIN: string;
    EMAIL_IS_NOT_REGISTERED: string;
    EMAIL_OR_PASSWORD_INCORRECT: string;
    LINK_EXPIRED: string;
    PASSWORD_SUCCESSFULLY_CHANGED: string;
}
export interface Buttons {
    search: string;
    filter: string;
    login: string;
    logout: string;
    continue: string;
    waiting: string;
    get_started: string;
    save: string;
}

export interface Pages {
    default: string;
    main: string;
    404: string;
    profile: string;
    get_started: string;
    post: string;
    log_in: string;
    sign_up: string;
    terms_of_service: string;
    privacy_and_policy: string;
    favorites: string;
    cart: string;
    forgot_password: string;
    confirm_email: string;
    reset_password: string;
}

export interface GetStarted {
    log_in: Login;
    sign_up: SignUp;
    forgot_password: ForgotPassword;
}

export interface Login {
    log_in: string;
    sign_up: string;
    welcome_message: string;
    email: string;
    password: string;
    login: string;
    forget_password: string;
    submit_btn: string;
    no_account_yet: string;
    now: string;
}

export interface ForgotPassword {
    welcome_message: string;
    forget_password: string;
    submit_btn: string;
    email: string,
}

export interface SignUp {
    log_in: string;
    sign_up: string;
    welcome_message: string;
    fullname: string;
    email: string;
    password: string;
    confirm_password: string;
    register: string;
    submit_btn: string;
    already_have_account: string;
    password_levels: PasswordLevels;
    terms_of_service: string;
}

export interface PasswordLevels {
    weak: string;
    moderate: string;
    strong: string;
}

export interface ResetPassword {
    new_password: string;
    new_password_description: string;
}

export interface LanguageContent {
    lang: string;
    note: string;
    az: string;
    en: string;
    ru: string;
    email_confirming: string,
    please_wait: string,
    redirecting_to_home: string,
    redirecting_to_login: string,
    buttons: Buttons;
    pages: Pages;
    get_started: GetStarted;
    reset_password: ResetPassword,

    backend_messages: BackendMessage
}
