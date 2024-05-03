import {i18n} from "~/plugins/i18n";

const availableAppRoutes = {
    main: '/',
    get_started: '/getstarted',
    posts: '/posts/*',
    categories: '/categories/*',
    profile: '/account/user',
    favorites: '/account/favorites',
    cart: '/account/cart',
    terms_of_service: '/terms_of_service',
    privacy_and_policy: '/privacy_and_policy',
    confirm_email: '/confirm_email',
    reset_password: '/reset_password'
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
        {
            url: availableAppRoutes.cart,
            icon: 'shopping_cart',
            label: 'pages.cart'
        },
    ]
}


export default availableAppRoutes;
