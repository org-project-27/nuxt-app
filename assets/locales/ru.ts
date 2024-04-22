import type {LanguageContent} from "assets/scripts/types/LocalesType";

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
        save: "Сохраните"
    },
    pages: {
        default: "По умолчанию",
        main: "Главная страница",
        404: "Страница не найдена!",
        profile: "Aккаунт",
        get_started: "Начать",
        post: "Продукт",
        log_in: "Войти",
        sign_up: "Зарегистрироваться",
        terms_of_service: "Условия обслуживания",
        privacy_and_policy: "Политику конфиденциальности",
        favorites: "Избранное",
        cart: "Tележка",
        forgot_password: "Я забыл свой пароль",
        confirm_email: "Подтверждать почта",
        reset_password: "Сброс пароля",
    },
    get_started: {
        log_in: {
            log_in: "Войти",
            sign_up: "Зарегистрироваться",
            welcome_message: "⭐️ Добро пожаловать обратно!",
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
            sign_up: "Зарегистрироваться",
            welcome_message: "🙃 Присоединяйтесь к нам!",
            fullname: "Полное имя",
            email: "Электронная почта",
            password: "Пароль",
            confirm_password: "Подтвердите пароль",
            register: "Зарегистрироваться",
            submit_btn: "Зарегистрироваться сейчас",
            already_have_account: "Уже есть аккаунт?",
            password_levels: {
                weak: "Слабый: Требуется больше символов и разнообразия!",
                moderate: "Средний: Добавьте разнообразие для усиления.",
                strong: "Сильный: Ваш пароль надежен и надежный."
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
        new_password_description: '🔐 Выберите новый надежный пароль, который вы ранее не использовали на этом сайте.'
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
        LINK_EXPIRED: "Срок действия ссылки истек!"
    }
};

export default { ...locales };