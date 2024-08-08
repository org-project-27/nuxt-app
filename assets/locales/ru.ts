import type {LanguageContent} from "~/constants/types/LocalesType";

let locales: LanguageContent;
locales = {
    lang: "Язык",
    note: "Заметка",
    az: "Азербайджанский",
    en: "Английский",
    ru: "Русский",
    please_wait: "Пожалуйста, подождите",
    redirecting_to_home: "Переход на главную страницу",
    redirecting_to_login: "Переход на страницу входа",
    email_confirming: "Подтверждение адреса электронной почты",
    buttons: {
        search: "Поиск",
        filter: "Фильтр",
        login: "Войти",
        logout: "Выйти",
        continue: "Продолжить",
        waiting: "Ожидание",
        get_started: "Начать",
        save: "Сохраните",
        change: "Изменить"
    },
    pages: {
        default: "По умолчанию",
        main: "Главная страница",
        404: "Страница не найдена!",
        profile: "Aккаунт",
        get_started: "Начать",
        post: "Продукт",
        log_in: "Войти",
        sign_up: "Регистрация",
        terms_of_service: "Условия обслуживания",
        privacy_and_policy: "Политику конфиденциальности",
        favorites: "Избранное",
        cart: "Tележка",
        forgot_password: "Я забыл свой пароль",
        confirm_email: "Подтверждать почта",
        reset_password: "Сброс пароля",
        brands: 'Бренды',
        dashboard: 'Панель управления',
        requests: 'Запросы',
        settings: 'Настройки',
        support: 'Поддержка',
        about_us: 'О нас',
        catalog: 'Каталог'
    },
    get_started: {
        log_in: {
            log_in: "Войти",
            sign_up: "Регистрация",
            welcome_message: "🎉 Добро пожаловать обратно!",
            email: "Электронная почта",
            password: "Пароль",
            login: "Войти",
            forget_password: "Забыли пароль?",
            submit_btn: "Войти",
            no_account_yet: "Еще нет аккаунта?",
            now: "Сейчас"
        },
        sign_up: {
            log_in: "Войти",
            sign_up: "Регистрация",
            welcome_message: "🙃 Присоединяйтесь к нам!",
            fullname: "Полное имя",
            email: "Электронная почта",
            password: "Пароль",
            confirm_password: "Подтвердите пароль",
            register: "Регистрация",
            submit_btn: "Регистр",
            already_have_account: "Уже есть аккаунт?",
            password_levels: {
                weak: "Слабый - Требуется больше символов и разнообразия!",
                moderate: "Средний - Добавьте разнообразие для усиления.",
                strong: "Сильный - Ваш пароль надежен и надежный."
            },
            terms_of_service: "<span>Я принимаю <a style='font-size: 1rem' class='decoration' href='/terms_of_service' target='_blank'>Условия обслуживания</a> и <a style='font-size: 1rem' class='decoration' href='/privacy_and_policy' target='_blank'>Политику конфиденциальности</a></span>"
        },
        forgot_password: {
            welcome_message: "🔑 Введите вашу электронную почту, и мы отправим вам ссылку для быстрого и безопасного сброса пароля!",
            submit_btn: 'Отправить ссылку',
            forget_password: "Сбросить пароль",
            email: 'Ваша электронная почта'
        }
    },
    reset_password: {
        new_password: "Новый пароль",
        confirm_password: "Подтвердите пароль",
        confirm_password_wrong: "Подтверждение пароля не совпадает с новым паролем!",
        new_password_description: '🔐 Выберите новый надежный пароль, который вы ранее не использовали на этом сайте.',
    },
    user_account: {
        founder: "Основатель",
        brand_owner: "Владелец бренда",
        customer: "Клиент",
        user: "Пользователь",
        account_settings: "Настройки аккаунта",
        place_manager: "Менеджер места",
        change_password: "Сменить пароль",
        fullname: "Полное имя",
        edit_fullname: "Ваше полное имя",
        email: "Электронная почта",
        edit_email: "Ваша электронная почта",
        new_password: "Новый пароль",
        current_password: "Текущий пароль",
        bio: "О себе",
        bio_desc: "Заметка о себе",
        phone: "Телефон",
        edit_phone: "Ваш телефон",
        birthdate: "День рождения",
        confirm_password: "Подтвердите пароль",
        change_profile_photo: "Изменить Фотографию Профиля",
        you_cannot_edit_your_email: 'Вы не можете редактировать свой адрес электронной почты!'
    },
    layouts: {
        account_layout: {
            page: 'Страница',
            navbar: {
                groups: {
                    menu: 'Меню',
                    general: 'Общие'
                },
                links: {
                    dashboard: 'Панель управления',
                    requests: 'Запросы',
                    your_account: 'Ваш аккаунт',
                    your_brands: 'Ваши бренды',
                    your_places: 'Ваши места',
                    your_services: 'Ваши услуги',
                    support_and_help: 'Поддержка и помощь',
                    settings: 'Настройки',
                }
            }
        }
    },
    components: {
        photo_uploader: {
            desc: "Перетащите сюда свое изображение или щелкните и выберите",
            submit: "Сохраните",
            reset: "Очистить"
        },
        file_uploader: {
            desc: "Перетащите файл сюда или щелкните и выберите",
            submit: "Сохраните",
            reset: "Очистить"
        }
    },
    backend_messages: {
        DONE: 'Готово!',
        SOMETHING_WENT_WRONG: 'Что-то пошло не так!',
        EMAIL_IS_EXIST: 'Электронная почта уже существует!',
        USER_REGISTRATION_FAILED: 'Процесс регистрации пользователя не удался!',
        USER_SUCCESSFULLY_REGISTERED: 'Пользователь успешно зарегистрирован!',
        EMAIL_SUCCESSFULLY_CONFIRMED: "Электронная почта успешно подтверждена!",
        EMAIL_IS_NOT_VALID: 'Электронная почта недействительна!',
        INVALID_EMAIL: 'Электронная почта недействительна!',
        INVALID_PASSWORD: 'Пароль недействителен!',
        INVALID_FULLNAME: 'Полное имя недействительно!',
        INVALID_TOKEN: 'Что-то пошло не так!',
        BCRYPT_ERROR: 'Что-то пошло не так!',
        USER_LOGIN_PROGRESS_FAILED: 'Процесс входа пользователя не удался!',
        USER_SUCCESSFULLY_LOGIN: 'Пользователь успешно вошел в систему!',
        EMAIL_IS_NOT_REGISTERED: 'Электронная почта не зарегистрирована!',
        EMAIL_OR_PASSWORD_INCORRECT: 'Электронная почта или пароль неверны!',
        LINK_EXPIRED: "Срок действия ссылки истек!",
        PASSWORD_SUCCESSFULLY_CHANGED: "Пароль успешно изменен!",
        PASSWORD_RESET_LINK_WILL_SENT: "Если ваш адрес электронной почты зарегистрирован в нашей системе, мы отправим инструкции по сбросу пароля. Пожалуйста, проверьте ваш почтовый ящик и папку со спамом.",
        USER_NOT_FOUND: 'Пользователь не найден',
        AUTH_REQUIRED: 'Требуется авторизация',
        PARAM_REQUIRED: 'Требуется параметр',
        OBJECT_NOT_FOUND: 'Объект не найден',
        INVALID_PLACE_NAME: 'Недопустимое название места',
        INVALID_WEB_SITE_URL: 'Недопустимый URL веб-сайта',
        INVALID_ZIP_CODE: 'Недопустимый почтовый индекс',
        INVALID_ADDRESS: 'Недопустимый адрес',
        INVALID_PLACE_TYPE: 'Недопустимый тип места',
        INVALID_CITY: 'Недопустимый город',
        INVALID_STATE: 'Недопустимый штат',
        INVALID_PHONE: 'Недопустимый телефон',
        INVALID_OPENING_HOURS: 'Недопустимое время работы',
        ALREADY_EXIST: 'Уже существует!',
        PLACE_NOT_FOUND: 'Место не найдено',
        YOU_CANNOT_EDIT_PLACE_ID: 'Вы не можете редактировать place_id',
        YOU_CANNOT_EDIT_BRAND_ID: 'Вы не можете редактировать brand_id',
        YOU_CANNOT_EDIT_OWNER_ID: 'Вы не можете редактировать owner_id',
        BRAND_NOT_FOUND: 'Бренд не найден',
        BRAND_ALREADY_EXIST: 'Бренд уже существует',
        INVALID_BRAND_NAME: 'Недопустимое название бренда',
        INVALID_BRAND_BIO_SIZE: 'Недопустимый размер описания бренда',
        NAME_ALREADY_TAKEN: 'Имя уже занято',
        INVALID_BIRTHDAY: 'Неверная дата рождения',
        OLD_PASSWORD_INCORRECT: 'Текущий пароль неверен!',
        PASSWORDS_ARE_SAME: 'Новый пароль не может быть таким же, как текущий!',
        INVALID_BODY: 'Неверные поля формы!',
        BIRTHDAY_ALREADY_EXIST: 'Дата рождения уже установлена!',
    }
};

export default { ...locales };