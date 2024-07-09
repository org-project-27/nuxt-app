import type {LanguageContent} from "~/constants/types/LocalesType";

let locales: LanguageContent;
locales = {
    lang: "Dil",
    note: "Qeyd",
    az: "Azərbaycanca",
    en: "İngiliscə",
    ru: "Rusca",
    email_confirming: "E-poçt ünvanı təsdiqlənir",
    please_wait: "Zəhmət olmasa gözləyin",
    redirecting_to_home: "Əsas səhifəyə yönləndirilir",
    redirecting_to_login: "Login səhifəsinə yönləndirilir",
    buttons: {
        search: "Axtar",
        filter: "Filtr",
        login: "Daxil ol",
        logout: "Çıxış",
        continue: "Davam et",
        waiting: "Gözləyin",
        get_started: "Başlayaq",
        save: "Yadda saxla"
    },
    pages: {
        default: "Defolt",
        main: "Əsas Səhifə",
        404: "Səhifə Tapılmadı!",
        profile: "Hesabınız",
        get_started: "Başla",
        post: "Məhsul",
        log_in: "Daxil Ol",
        sign_up: "Qeydiyyatdan Keç",
        privacy_and_policy: "Məxfilik Siyasətini",
        terms_of_service: "Xidmət Şərtlərini",
        favorites: "Favoritlər",
        cart: "Səbətim",
        forgot_password: "Parolu Unutdum",
        confirm_email: 'E-poçt Təsdiqi',
        reset_password: "Yeni Parol",
        brands: 'Brendlər',
        dashboard: 'Panel',
        requests: 'Sorğular',
        settings: 'Ayarlar',
        support: 'Dəstək',
    },
    get_started: {
        log_in: {
            log_in: "Daxil ol",
            sign_up: "Qeydiyyatdan keç",
            welcome_message: "🎉 Xoş gəldiniz!",
            email: "E-poçt",
            password: "Parol",
            login: "Daxil ol",
            forget_password: "Parolunuzu unutdunuz?",
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
            password: "Parol",
            confirm_password: "Parolu təsdiqlə",
            register: "Qeydiyyat",
            submit_btn: "Qeydiyyatdan keç",
            already_have_account: "Artıq hesabınız var?",
            password_levels: {
                weak: "Zəif: Daha çox simvol və müxtəlifliyə ehtiyac var!",
                moderate: "Orta: Gücünü artırmaq üçün müxtəliflik əlavə edin.",
                strong: "Güclü: Parolunuz təhlükəsiz və möhkəmdir."
            },
            terms_of_service: "<span><a style='font-size: 1rem' class='decoration' href='/terms_of_service' target='_blank'>Xidmət Şərtlərini</a> və <a style='font-size: 1rem' class='decoration' href='/privacy_and_policy' target='_blank'>Məxfilik Siyasətini</a> qəbul edirəm</span>"
        },
        forgot_password: {
            welcome_message: "🔑 Zəhmət olmasa e-poçt adressinizi daxil edin. Sizə parolu tez və təhlükəsiz şəkildə yeniləmək üçün bir link göndərəcəyik!",
            submit_btn: 'Linki göndər',
            forget_password: "Parolu yenilə",
            email: 'E-poçt adresiniz'
        }
    },
    reset_password: {
        new_password: "Yeni parol",
        confirm_password: "Parolu təsdiqlə",
        confirm_password_wrong: "Yeni şifrə ilə təsdiq şifrəsi üst-üstə düşmür!",
        new_password_description: '🔐 Bu saytda əvvəllər istifadə etmədiyiniz güclü, yeni parol təyin edin.'
    },
    layouts: {
        account_layout: {
            page: 'Səhifəsi',
            navbar: {
                groups: {
                    menu: 'Menyu',
                    general: 'Ümumi'
                },
                links: {
                    dashboard: 'Panel',
                    requests: 'Sorğular',
                    your_account: 'Hesabınız',
                    your_brands: 'Brendləriniz',
                    your_places: 'Məkanlarınız',
                    your_services: 'Xidmətləriniz',
                    support_and_help: 'Dəstək və Kömək',
                    settings: 'Ayarlar',
                }
            }
        }
    },
    backend_messages: {
        DONE: 'Tamamlandı!',
        SOMETHING_WENT_WRONG: 'Bir şeylər səhv getdi!',
        EMAIL_IS_EXIST: 'E-poçt artıq mövcuddur!',
        USER_REGISTRATION_FAILED: 'İstifadəçi qeydiyyatı uğursuz oldu!',
        USER_SUCCESSFULLY_REGISTERED: 'İstifadəçi uğurla qeydiyyata alındı!',
        EMAIL_SUCCESSFULLY_CONFIRMED: "E-poçtunuz uğurla təsdiqləndi!",
        EMAIL_IS_NOT_VALID: 'E-poçt etibarsızdır!',
        INVALID_EMAIL: 'E-poçt etibarsızdır!',
        INVALID_PASSWORD: 'Parol etibarsızdır!',
        INVALID_FULLNAME: 'Tam ad etibarsızdır!',
        INVALID_TOKEN: 'Bir şeylər səhv getdi!',
        BCRYPT_ERROR: 'Bir şeylər səhv getdi!',
        USER_LOGIN_PROGRESS_FAILED: 'İstifadəçi girişi uğursuz oldu!',
        USER_SUCCESSFULLY_LOGIN: 'İstifadəçi uğurla daxil oldu!',
        EMAIL_IS_NOT_REGISTERED: 'E-poçt qeydiyyatdan keçməyib!',
        EMAIL_OR_PASSWORD_INCORRECT: 'E-poçt və ya parol yanlışdır!',
        LINK_EXPIRED: "Bu link artıq keçərsizdir!",
        PASSWORD_SUCCESSFULLY_CHANGED: "Parol uğurla dəyişdirildi!",
        PASSWORD_RESET_LINK_WILL_SENT: "Əgər sizin e-poçt ünvanınız sistemimizdə qeydiyyatdan keçibsə, şifrəni sıfırlamaq üçün təlimatlar olan bir e-poçt göndəriləcəkdir. Zəhmət olmasa e-poçt qutunuzu və spam qovluğunuzu yoxlayın.",
        USER_NOT_FOUND: 'İstifadəçi tapılmadı',
        AUTH_REQUIRED: 'Login tələb olunur',
        PARAM_REQUIRED: 'Parametr tələb olunur',
        OBJECT_NOT_FOUND: 'Obyekt tapılmadı',
        INVALID_PLACE_NAME: 'Uyğunsuz məkan adı',
        INVALID_WEB_SITE_URL: 'Uyğunsuz veb sayt URL-si',
        INVALID_ZIP_CODE: 'Uyğunsuz poçt indeksi',
        INVALID_ADDRESS: 'Uyğunsuz ünvan',
        INVALID_PLACE_TYPE: 'Uyğunsuz məkan növü',
        INVALID_CITY: 'Uyğunsuz şəhər adı',
        INVALID_STATE: 'Uyğunsuz vilayət adı',
        INVALID_PHONE: 'Uyğunsuz telefon nömrəsi',
        INVALID_OPENING_HOURS: 'Uyğunsuz açılış saatları',
        ALREADY_EXIST: 'Artıq mövcuddur!',
        PLACE_NOT_FOUND: 'Məkan tapılmadı',
        YOU_CANNOT_EDIT_PLACE_ID: 'Place_id-ni redaktə edə bilməzsiniz',
        YOU_CANNOT_EDIT_BRAND_ID: 'Brand_id-ni redaktə edə bilməzsiniz',
        YOU_CANNOT_EDIT_OWNER_ID: 'Owner_id-ni redaktə edə bilməzsiniz',
        BRAND_NOT_FOUND: 'Brend tapılmadı',
        BRAND_ALREADY_EXIST: 'Brend artıq mövcuddur',
        INVALID_BRAND_NAME: 'Uyğunsuz brend adı',
        INVALID_BRAND_BIO_SIZE: 'Uyğunsuz brend bio ölçüsü',
        NAME_ALREADY_TAKEN: 'Ad artıq götürülüb',
    }
};

export default { ...locales };