import type {LanguageContent} from "assets/scripts/types/LocalesType";

let locales: LanguageContent;
locales = {
    lang: "Language",
    note: "Note",
    az: "Azərbaycanca",
    en: "English",
    ru: "Русский",
    buttons: {
        search: "Search",
        filter: "Filter",
        login: "Login",
        logout: "Log out",
        continue: "Continue",
        waiting: "Waiting",
        get_started: "Get started",
    },
    pages: {
        default: "Default",
        main: "Home",
        404: "Page is not found!",
        profile: "Account",
        get_started: "Get started",
        post: "Product",
        log_in: "Log in",
        sign_up: "Sign up",
        terms_of_service: "Terms of service",
        privacy_and_policy: "Privacy policy",
        favorites: "Favorites",
        cart: "Cart"
    },
    get_started: {
        log_in: {
            log_in: "Log in",
            sign_up: "Sign up",
            welcome_message: "⭐️ Welcome back!",
            email: "Email",
            password: "Password",
            login: "Login",
            forget_password: "Forgot password?",
            submit_btn: "Log in",
            no_account_yet: "Don't have an account yet?",
            now: "Now"
        },
        sign_up: {
            log_in: "Log in",
            sign_up: "Sign up",
            welcome_message: "🙃 Lets join us!",
            fullname: "Full name",
            email: "Email",
            password: "Password",
            confirm_password: "Confirm password",
            register: "Register",
            submit_btn: "Register Now",
            already_have_account: "Already have an account?",
            password_levels: {
                weak: "Weak: Needs more characters and variety!",
                moderate: "Moderate: Add variety to enhance strength.",
                strong: "Strong: Your password is secure and robust."
            },
            terms_of_service: "<span>I accept the <a style='font-size: 1rem' class='decoration' href='/terms_of_service' target='_blank'>Terms of service</a> and <a style='font-size: 1rem' class='decoration' href='/privacy_and_policy' target='_blank'>Privacy policy</a></span>"
        }
    },
    backend_messages: {
        DONE: 'Done!',
        SOMETHING_WENT_WRONG: 'Something went wrong!',
        EMAIL_IS_EXIST: 'Email is exist!',
        USER_REGISTRATION_FAILED: 'User registration progress was failed!',
        USER_SUCCESSFULLY_REGISTERED: 'User successfully registered!',
        EMAIL_IS_NOT_VALID: 'Email is not valid!',
        INVALID_EMAIL: 'Email is not valid!',
        INVALID_PASSWORD: 'Password is not valid!',
        INVALID_FULLNAME: 'Fullname is not valid!',
        INVALID_TOKEN: 'Something went wrong!',
        BCRYPT_ERROR: 'Something went wrong!',
        USER_LOGIN_PROGRESS_FAILED: 'User login progress was failed!',
        USER_SUCCESSFULLY_LOGIN: 'User successfully login!',
        EMAIL_IS_NOT_REGISTERED: 'Email is not registered!',
        EMAIL_OR_PASSWORD_INCORRECT: 'Email or password incorrect',
    }
};

export default { ...locales };