import type {LanguageContent} from "assets/scripts/types/LocalesType";

let locales: LanguageContent;
locales = {
    lang: "Dil",
    note: "Qeyd",
    az: "Azərbaycanca",
    en: "İngilis",
    ru: "Rus",
    buttons: {
        search: "Axtar",
        filter: "Filtr",
        login: "Daxil ol",
        logout: "Çıxış",
        continue: "Davam et",
        waiting: "Gözləyin",
        get_started: "Başlayaq"
    },
    pages: {
        default: "Defolt",
        main: "Əsas səhifə",
        404: "Səhifə tapılmadı!",
        profile: "Hesabınız",
        get_started: "Başla",
        post: "Məhsul",
        log_in: "Daxil ol",
        sign_up: "Qeydiyyatdan keç",
        privacy_and_policy: "Məxfilik Siyasətini",
        terms_of_service: "Xidmət Şərtlərini",
        favorites: "Favoritlər",
        cart: "Səbətim"
    },
    get_started: {
        log_in: {
            log_in: "Daxil ol",
            sign_up: "Qeydiyyatdan keç",
            welcome_message: "⭐️ Xoş gəldiniz!",
            email: "E-poçt",
            password: "Şifrə",
            login: "Daxil ol",
            forget_password: "Şifrənizimi unutdunuz?",
            submit_btn: "Daxil ol",
            no_account_yet: "Hələ də hesabınız yoxdu?",
            now: "indi"
        },
        sign_up: {
            log_in: "Daxil ol",
            sign_up: "Qeydiyyatdan keç",
            welcome_message: "🙃 Bizə qoşulun!",
            fullname: "Ad və Soyad",
            email: "E-poçt",
            password: "Şifrə",
            confirm_password: "Şifrəni təsdiqlə",
            register: "Qeydiyyat",
            submit_btn: "Qeydiyyatdan keç",
            already_have_account: "Artıq hesabınız var?",
            password_levels: {
                weak: "Zəif: Daha çox simvol və müxtəlifliyə ehtiyac var!",
                moderate: "Orta: Gücünü artırmaq üçün müxtəliflik əlavə edin.",
                strong: "Güclü: Şifrəniz təhlükəsiz və möhkəmdir."
            },
            terms_of_service: "<span><a style='font-size: 1rem' class='decoration' href='/terms_of_service' target='_blank'>Xidmət Şərtlərini</a> və <a style='font-size: 1rem' class='decoration' href='/privacy_and_policy' target='_blank'>Məxfilik Siyasətini</a> qəbul edirəm</span>"
        }
    },
    backend_messages: {
        DONE: 'Tamamlandı!',
        SOMETHING_WENT_WRONG: 'Bir şeylər səhv getdi!',
        EMAIL_IS_EXIST: 'E-poçt artıq mövcuddur!',
        USER_REGISTRATION_FAILED: 'İstifadəçi qeydiyyatı uğursuz oldu!',
        USER_SUCCESSFULLY_REGISTERED: 'İstifadəçi uğurla qeydiyyata alındı!',
        EMAIL_IS_NOT_VALID: 'E-poçt etibarsızdır!',
        INVALID_EMAIL: 'E-poçt etibarsızdır!',
        INVALID_PASSWORD: 'Şifrə etibarsızdır!',
        INVALID_FULLNAME: 'Tam ad etibarsızdır!',
        INVALID_TOKEN: 'Bir şeylər səhv getdi!',
        BCRYPT_ERROR: 'Bir şeylər səhv getdi!',
        USER_LOGIN_PROGRESS_FAILED: 'İstifadəçi girişi uğursuz oldu!',
        USER_SUCCESSFULLY_LOGIN: 'İstifadəçi uğurla daxil oldu!',
        EMAIL_IS_NOT_REGISTERED: 'E-poçt qeydiyyatdan keçməyib!',
        EMAIL_OR_PASSWORD_INCORRECT: 'E-poçt və ya şifrə yanlışdır',
    }
};

export default { ...locales };