import type {IconsTypes} from "assets/images/icons/materialIconsList";

const availableAppRoutes = {
    main: '/',
    get_started: '/getstarted',
    terms_of_service: '/terms_of_service',
    privacy_and_policy: '/privacy_and_policy',
    confirm_email: '/confirm_email',
    reset_password: '/reset_password',
    init: '/init',
    account: '/account',
    profile: '/account/user',
    favorites: '/account/favorites',
    dashboard: '/account/dashboard',
    brands: '/account/brands',
    requests: '/account/requests',
    support: '/support',
    settings: '/settings',
    login: '/getstarted?view=log_in',
    signup: '/getstarted?view=sign_up',
    about_us: '/about_us',
    catalog: '/catalog'
};

export const headerRoutes = {
    authRoutes: [
        {
            url: availableAppRoutes.profile,
            icon: 'person',
            label: 'pages.profile'
        },
        {
            url: availableAppRoutes.favorites,
            icon: 'favorite',
            label: 'pages.favorites'
        },
    ],
    defaultLayoutHeaderNavLinks: [
        {
            url: availableAppRoutes.main,
            label: 'pages.main'
        },
        {
            url: availableAppRoutes.catalog,
            label: 'pages.catalog'
        },
        {
            url: availableAppRoutes.brands,
            label: 'pages.brands'
        },
        {
            url: availableAppRoutes.about_us,
            label: 'pages.about_us'
        },
    ]
}

export const accountLayoutNavLinks : {
    menu: Array<{label: string, icon: IconsTypes, link: string}>,
    general: Array<{label: string, icon: IconsTypes, link: string}>
} = {
    menu: [
        {
            label: 'your_account',
            icon: 'person',
            link: availableAppRoutes.profile,
        },
        {
            label: 'dashboard',
            icon: 'monitoring',
            link: availableAppRoutes.dashboard,
        },
        {
            label: 'your_brands',
            icon: 'storefront',
            link: availableAppRoutes.brands,
        },
        {
            label: 'requests',
            icon: 'inventory',
            link: availableAppRoutes.requests,
        },
    ],
    general: [
        {
            label: 'support_and_help',
            icon: 'support_agent',
            link: availableAppRoutes.support,
        },
        {
            label: 'settings',
            icon: 'settings',
            link: availableAppRoutes.settings,
        },
    ],
}


export default availableAppRoutes;
