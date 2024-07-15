type LocaleType = string | number;

interface BackendMessage {
    DONE: LocaleType;
    SOMETHING_WENT_WRONG: LocaleType;
    EMAIL_IS_EXIST: LocaleType;
    USER_REGISTRATION_FAILED: LocaleType;
    USER_SUCCESSFULLY_REGISTERED: LocaleType;
    EMAIL_SUCCESSFULLY_CONFIRMED: LocaleType;
    EMAIL_IS_NOT_VALID: LocaleType;
    INVALID_EMAIL: LocaleType;
    INVALID_PASSWORD: LocaleType;
    INVALID_FULLNAME: LocaleType;
    INVALID_TOKEN: LocaleType;
    BCRYPT_ERROR: LocaleType;
    USER_NOT_FOUND: LocaleType;
    USER_LOGIN_PROGRESS_FAILED: LocaleType;
    USER_SUCCESSFULLY_LOGIN: LocaleType;
    EMAIL_IS_NOT_REGISTERED: LocaleType;
    EMAIL_OR_PASSWORD_INCORRECT: LocaleType;
    LINK_EXPIRED: LocaleType;
    PASSWORD_SUCCESSFULLY_CHANGED: LocaleType;
    PASSWORD_RESET_LINK_WILL_SENT: LocaleType;
    AUTH_REQUIRED: LocaleType;
    PARAM_REQUIRED: LocaleType;
    OBJECT_NOT_FOUND: LocaleType;
    INVALID_PLACE_NAME: LocaleType;
    INVALID_WEB_SITE_URL: LocaleType;
    INVALID_ZIP_CODE: LocaleType;
    INVALID_ADDRESS: LocaleType;
    INVALID_PLACE_TYPE: LocaleType;
    INVALID_CITY: LocaleType;
    INVALID_STATE: LocaleType;
    INVALID_PHONE: LocaleType;
    INVALID_OPENING_HOURS: LocaleType;
    ALREADY_EXIST: LocaleType;
    PLACE_NOT_FOUND: LocaleType;
    YOU_CANNOT_EDIT_PLACE_ID: LocaleType;
    YOU_CANNOT_EDIT_BRAND_ID: LocaleType;
    YOU_CANNOT_EDIT_OWNER_ID: LocaleType;
    BRAND_NOT_FOUND: LocaleType;
    BRAND_ALREADY_EXIST: LocaleType;
    INVALID_BRAND_NAME: LocaleType;
    INVALID_BRAND_BIO_SIZE: LocaleType;
    NAME_ALREADY_TAKEN: LocaleType;
}
export interface Buttons {
    search: LocaleType;
    filter: LocaleType;
    login: LocaleType;
    logout: LocaleType;
    continue: LocaleType;
    waiting: LocaleType;
    get_started: LocaleType;
    save: LocaleType;
}

export interface Pages {
    default: LocaleType;
    main: LocaleType;
    404: LocaleType;
    profile: LocaleType;
    get_started: LocaleType;
    post: LocaleType;
    log_in: LocaleType;
    sign_up: LocaleType;
    terms_of_service: LocaleType;
    privacy_and_policy: LocaleType;
    favorites: LocaleType;
    cart: LocaleType;
    forgot_password: LocaleType;
    confirm_email: LocaleType;
    reset_password: LocaleType;
    brands: LocaleType;
    dashboard: LocaleType;
    requests: LocaleType;
    settings: LocaleType;
    support: LocaleType;
    about_us: LocaleType;
    catalog: LocaleType;
}

export interface GetStarted {
    log_in: Login;
    sign_up: SignUp;
    forgot_password: ForgotPassword;
}

export interface Login {
    log_in: LocaleType;
    sign_up: LocaleType;
    welcome_message: LocaleType;
    email: LocaleType;
    password: LocaleType;
    login: LocaleType;
    forget_password: LocaleType;
    submit_btn: LocaleType;
    no_account_yet: LocaleType;
    now: LocaleType;
}

export interface ForgotPassword {
    welcome_message: LocaleType;
    forget_password: LocaleType;
    submit_btn: LocaleType;
    email: LocaleType;
}

export interface SignUp {
    log_in: LocaleType;
    sign_up: LocaleType;
    welcome_message: LocaleType;
    fullname: LocaleType;
    email: LocaleType;
    password: LocaleType;
    confirm_password: LocaleType;
    register: LocaleType;
    submit_btn: LocaleType;
    already_have_account: LocaleType;
    password_levels: PasswordLevels;
    terms_of_service: LocaleType;
}

export interface PasswordLevels {
    weak: LocaleType;
    moderate: LocaleType;
    strong: LocaleType;
}

export interface ResetPassword {
    new_password: LocaleType;
    new_password_description: LocaleType;
    confirm_password: LocaleType;
    confirm_password_wrong: LocaleType
}

export interface AccountLayout {
    page: LocaleType;
    navbar: {
        groups: {
            menu: LocaleType;
            general: LocaleType
        },
        links: {
            requests: LocaleType;
            your_account: LocaleType;
            your_brands: LocaleType;
            your_places: LocaleType;
            your_services: LocaleType;
            dashboard: LocaleType;
            support_and_help: LocaleType;
            settings: LocaleType;
        }
    }
}

export interface LanguageContent {
    lang: LocaleType;
    note: LocaleType;
    az: LocaleType;
    en: LocaleType;
    ru: LocaleType;
    email_confirming: LocaleType;
    please_wait: LocaleType;
    redirecting_to_home: LocaleType;
    redirecting_to_login: LocaleType;
    buttons: Buttons;
    pages: Pages;
    get_started: GetStarted;
    reset_password: ResetPassword;
    backend_messages: BackendMessage;
    layouts: {
        account_layout: AccountLayout
    }
}

export type LangOptionsType = 'az-AZ' | 'en-US' | 'ru-RU';
export interface AvailableLocalItem {
    messages: object;
    label: LocaleType;
    iso: LangOptionsType;
    icon: any
}

export type AvailableLocals = Array <AvailableLocalItem>;