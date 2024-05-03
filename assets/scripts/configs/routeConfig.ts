import {type RouteConfigurations} from '~/assets/scripts/types/RouteConfigTypes';
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
        layout: 'default',
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
    title: 'pages.main',
    layout: 'default',
    description: "Welcome",
    middlewareMethod(to, from) {
        //console.log('Main page')
    }
};

routeConfig[appAvailableRoutes.get_started] = {
    auth: false,
    title: 'pages.get_started',
    layout: 'default',
    description: "Let's get started!",
    middlewareMethod(to, from) {
        if (to.query.view) {
            const { i18n} =  useI18nStore();
            const { brandName } = useAppConfig();
            const title = i18n.global.t(`pages.${to.query.view}`)
            useSeoMeta({
                title: `${title} | ${brandName}`
            });
        }
    }
};

routeConfig[appAvailableRoutes.posts] = {
    auth: false,
    title: 'pages.post',
    layout: 'default',
    description: "All best for you!",
    middlewareMethod(to, from) {
        //console.log('Posts page function')
    }
};

routeConfig[appAvailableRoutes.categories] = {
    auth: false,
    title: 'pages.categories',
    layout: 'default',
    description: "Categories",
    middlewareMethod(to, from) {
        //console.log('Posts page function');
    }
};

routeConfig[appAvailableRoutes.profile] = {
    auth: true,
    title: 'pages.profile',
    layout: "default",
    description: "All best for you!",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.favorites] = {
    auth: true,
    title: 'pages.favorites',
    layout: "default",
    description: "All best for you!",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.cart] = {
    auth: true,
    title: 'pages.cart',
    layout: "default",
    description: "All best for you!",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.terms_of_service] = {
    auth: false,
    title: 'pages.terms_of_service',
    layout: "default",
    description: "All best for you!",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.privacy_and_policy] = {
    auth: false,
    title: 'pages.privacy_and_policy',
    layout: "default",
    description: "All best for you!",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.confirm_email] = {
    auth: false,
    title: 'pages.confirm_email',
    layout: 'default',
    description: "Email Confirmation",
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.reset_password] = {
    auth: false,
    title: 'pages.reset_password',
    layout: 'default',
    description: "Reset your password!",
    middlewareMethod(to, from) {

    }
};

export default routeConfig;