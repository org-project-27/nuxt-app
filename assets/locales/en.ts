import type {LanguageContent} from "~/constants/types/LocalesType";

let locales: LanguageContent;
locales = {
    lang: "Language",
    note: "Note",
    az: "Azerbaijani",
    en: "English",
    ru: "Russian",
    email_confirming: "Email address confirming",
    please_wait: "Please wait",
    redirecting_to_home: "Redirecting to home page",
    redirecting_to_login: "Redirecting to login page",
    error: 'Oops! An error occurred',
    buttons: {
        search: "Search",
        filter: "Filter",
        login: "Login",
        logout: "Log out",
        continue: "Continue",
        waiting: "Waiting",
        get_started: "Get started",
        save: "Save",
        change: "Change"
    },
    pages: {
        default: "Default",
        main: "Home",
        404: "Page is not found!",
        profile: "Account",
        get_started: "Get Started",
        post: "Product",
        log_in: "Login",
        sign_up: "Signup",
        terms_of_service: "Terms of Service",
        privacy_and_policy: "Privacy Policy",
        favorites: "Favorites",
        cart: "Cart",
        forgot_password: "Forgot Password",
        confirm_email: 'Confirm Email',
        reset_password: "Reset Password",
        brands: 'Brands',
        dashboard: 'Dashboard',
        requests: 'Requests',
        settings: 'Settings',
        support: 'Support',
        about_us: 'About Us',
        catalog: 'Catalog'
    },
    get_started: {
        log_in: {
            log_in: "Log in",
            sign_up: "Sign up",
            welcome_message: "🎉 Welcome back!",
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
                weak: "Weak - Needs more characters and variety!",
                moderate: "Moderate - Add variety to enhance strength.",
                strong: "Strong - Your password is secure and robust."
            },
            terms_of_service: "<span>I accept the <a style='font-size: 1rem' class='decoration' href='/terms_of_service' target='_blank'>Terms of service</a> and <a style='font-size: 1rem' class='decoration' href='/privacy_and_policy' target='_blank'>Privacy policy</a></span>"
        },
        forgot_password: {
            welcome_message: "🔑 Enter your email, and we'll send you a link to reset it quickly and securely!",
            submit_btn: 'Send link',
            forget_password: "Reset password",
            email: 'Your email'
        }
    },
    reset_password: {
        new_password: 'New password',
        confirm_password: "Confirm password",
        confirm_password_wrong: "Confirm password does not match the new password!",
        new_password_description: '🔐 Choose a strong, new password that you haven\'t previously used on this site.'
    },
    user_account: {
        founder: "Founder",
        brand_owner: "Brand Owner",
        customer: "Customer",
        user: "User",
        account_settings: "Account Settings",
        place_manager: "Place Manager",
        change_password: "Change Password",
        fullname: "Full name",
        edit_fullname: "Your fullname",
        email: "Email",
        edit_email: 'Your email',
        new_password: "New Password",
        current_password: "Current Password",
        bio: "About",
        bio_desc: "Note about yourself",
        phone: 'Phone',
        edit_phone: 'Your phone',
        birthdate: 'Birthday',
        confirm_password: 'Confirm Password',
        change_profile_photo: 'Change Profile Photo',
        you_cannot_edit_your_email: 'You cannot edit your email address!'
    },
    layouts: {
        account_layout: {
            page: 'Page',
            navbar: {
                groups: {
                    menu: 'Menu',
                    general: 'General'
                },
                links: {
                    dashboard: 'Dashboard',
                    requests: 'Requests',
                    your_account: 'Account',
                    your_brands: 'Your Brands',
                    your_places: 'Your Places',
                    your_services: 'Your Services',
                    support_and_help: 'Support & Help',
                    settings: 'Settings',
                }
            }
        }
    },
    components: {
        photo_uploader: {
            no_profile_photo: "Delete current profile photo",
            desc: "Drag your image here or click and select",
            submit: "Save",
            reset: "Reset"
        },
        file_uploader: {
            desc: "Drag your file here or click and select",
            submit: "Save",
            reset: "Reset"
        }
    },
    backend_messages: {
        DONE: 'Done!',
        SOMETHING_WENT_WRONG: 'Something went wrong!',
        EMAIL_IS_EXIST: 'Email is exist!',
        USER_REGISTRATION_FAILED: 'User registration progress was failed!',
        USER_SUCCESSFULLY_REGISTERED: 'User successfully registered!',
        EMAIL_SUCCESSFULLY_CONFIRMED: "Email successfully confirmed!",
        EMAIL_IS_NOT_VALID: 'Email is not valid!',
        INVALID_EMAIL: 'Email is not valid!',
        INVALID_PASSWORD: 'Password is not valid!',
        INVALID_FULLNAME: 'Fullname is not valid!',
        INVALID_TOKEN: 'Something went wrong!',
        BCRYPT_ERROR: 'Something went wrong!',
        USER_LOGIN_PROGRESS_FAILED: 'User login progress was failed!',
        USER_SUCCESSFULLY_LOGIN: 'User successfully login!',
        EMAIL_IS_NOT_REGISTERED: 'Email is not registered!',
        EMAIL_OR_PASSWORD_INCORRECT: 'Email or password incorrect!',
        LINK_EXPIRED: "Link expired!",
        PASSWORD_SUCCESSFULLY_CHANGED: "Password successfully changed!",
        PASSWORD_RESET_LINK_WILL_SENT: "If your email address is registered in our system, we will send an email with password reset instructions. Please check your inbox and spam folder.",
        USER_NOT_FOUND: 'User not found',
        AUTH_REQUIRED: 'Auth required',
        PARAM_REQUIRED: 'Param required',
        OBJECT_NOT_FOUND: 'Object not found',
        INVALID_PLACE_NAME: 'Invalid place name',
        INVALID_WEB_SITE_URL: 'Invalid website URL',
        INVALID_ZIP_CODE: 'Invalid zip-code',
        INVALID_ADDRESS: 'Invalid address',
        INVALID_PLACE_TYPE: 'Invalid place type',
        INVALID_CITY: 'Invalid city',
        INVALID_STATE: 'Invalid state',
        INVALID_PHONE: 'Invalid phone',
        INVALID_OPENING_HOURS: 'Invalid opening hours',
        ALREADY_EXIST: 'Already exists!',
        PLACE_NOT_FOUND: 'Place not found',
        YOU_CANNOT_EDIT_PLACE_ID: 'You cannot edit place_id',
        YOU_CANNOT_EDIT_BRAND_ID: 'You cannot edit brand_id',
        YOU_CANNOT_EDIT_OWNER_ID: 'You cannot edit owner_id',
        BRAND_NOT_FOUND: 'Brand not found',
        BRAND_ALREADY_EXIST: 'Brand already exists',
        INVALID_BRAND_NAME: 'Invalid brand name',
        INVALID_BRAND_BIO_SIZE: 'Invalid brand bio size',
        NAME_ALREADY_TAKEN: 'Name already taken',
        INVALID_BIRTHDAY: 'Invalid birthdate',
        OLD_PASSWORD_INCORRECT: 'Current password is incorrect!',
        PASSWORDS_ARE_SAME: 'New password cannot be same with current password!',
        INVALID_BODY: 'Invalid form fields!',
        BIRTHDAY_ALREADY_EXIST: 'Birthday already set!',
    }
};

export default {...locales};