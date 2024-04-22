import {type RouteConfigurations} from '~/assets/scripts/types/RouteConfigTypes';
import {i18n} from "~/plugins/i18n";
import appAvailableRoutes from "assets/scripts/constants/availableAppRoutes";

let routeConfig: RouteConfigurations = {};

routeConfig = {
    default: {
        auth: false,
        title: null,
        layout: 'default',
        description: "All best for you!",
        middlewareMethod(to, from) {
        }
    },
    //#TODO: These are examples. So delete it after if you don't need it enough.
    "/posts/example/*": {
        auth: false,
        title: "Example",
        layout: 'custom',
        description: "All best for you!",
        middlewareMethod(to, from) {
            //console.log('Posts page function')
        }
    },
    "/posts/link3": {
        auth: true,
        title: "POST AUTH NEED",
        layout: 'default',
        description: "All best for you!",
        middlewareMethod(to, from) {
            //console.log('Posts page special')
        }
    },
};

routeConfig[appAvailableRoutes.main] = {
    auth: false,
    title: i18n.global.t('pages.main'),
    layout: 'default',
    description: "Welcome",
    middlewareMethod(to, from) {
        //console.log('Main page')
    }
};

routeConfig[appAvailableRoutes.get_started] = {
    auth: false,
    title: i18n.global.t('pages.get_started'),
    layout: 'default',
    description: "Let's get started!",
    middlewareMethod(to, from) {
        if (to.query.view) {
            useSeoMeta({
                title: i18n.global.t(`pages.${to.query.view}`)
            });
        }
    }
};

routeConfig[appAvailableRoutes.posts] = {
    auth: false,
    title: i18n.global.t('pages.post'),
    layout: 'default',
    description: "All best for you!",
    middlewareMethod(to, from) {
        //console.log('Posts page function')
    }
};

routeConfig[appAvailableRoutes.categories] = {
    auth: false,
    title: i18n.global.t('pages.categories'),
    layout: 'default',
    description: "Categories",
    middlewareMethod(to, from) {
        //console.log('Posts page function');
    }
};

routeConfig[appAvailableRoutes.profile] = {
    auth: true,
    title: i18n.global.t('pages.profile'),
    layout: "default",
    description: "All best for you!",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.favorites] = {
    auth: true,
    title: i18n.global.t('pages.favorites'),
    layout: "default",
    description: "All best for you!",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.cart] = {
    auth: true,
    title: i18n.global.t('pages.cart'),
    layout: "default",
    description: "All best for you!",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.terms_of_service] = {
    auth: false,
    title: i18n.global.t('pages.terms_of_service'),
    layout: "default",
    description: "All best for you!",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.privacy_and_policy] = {
    auth: false,
    title: i18n.global.t('pages.privacy_and_policy'),
    layout: "default",
    description: "All best for you!",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.confirm_email] = {
    auth: false,
    title: i18n.global.t('pages.confirm_email'),
    layout: 'default',
    description: "Email Confirmation",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.reset_password] = {
    auth: false,
    title: i18n.global.t('pages.reset_password'),
    layout: 'default',
    description: "Reset your password!",
    middlewareMethod(to, from) {

    }
};

export default routeConfig;