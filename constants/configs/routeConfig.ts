import {type RouteConfigurations} from '~/constants/types/RouteConfigTypes';
import appAvailableRoutes from "~/constants/availableAppRoutes";

let routeConfig: RouteConfigurations = {};

routeConfig = {
    default: {
        auth: false,
        title: null,
        layout: 'default',
        description: "Everything will be faynn!",
        middlewareMethod(to, from) {
        }
    }
};

routeConfig[appAvailableRoutes.main] = {
    auth: false,
    title: 'pages.main',
    layout: 'default',
    description: ''
};

routeConfig[appAvailableRoutes.get_started] = {
    auth: false,
    title: 'pages.get_started',
    layout: 'default',
    description: '',
    middlewareMethod(to, from) {
        if (to.query.view) {
            const { i18n} =  useI18nStore();
            const { brandName } = useAppConfig();
            // @ts-ignore
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
    description: '',
    middlewareMethod(to, from) {
        //console.log('Posts page function')
    }
};

routeConfig[appAvailableRoutes.categories] = {
    auth: false,
    title: 'pages.categories',
    layout: 'default',
    description: '',
    middlewareMethod(to, from) {
        //console.log('Posts page function');
    }
};

routeConfig[appAvailableRoutes.profile] = {
    auth: true,
    title: 'pages.profile',
    layout: "account",
    description: 'Manage your profile on Faynn. Update your preferences, contact details, and password here!',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.favorites] = {
    auth: true,
    title: 'pages.favorites',
    layout: "default",
    description: '',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.cart] = {
    auth: true,
    title: 'pages.cart',
    layout: "default",
    description: '',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.dashboard] = {
    auth: true,
    title: 'pages.dashboard',
    layout: "account",
    description: '',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.brands] = {
    auth: true,
    title: 'pages.brands',
    layout: "account",
    description: '',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.requests] = {
    auth: true,
    title: 'pages.requests',
    layout: "account",
    description: '',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.support] = {
    auth: false,
    title: 'pages.support',
    layout: "default",
    description: '',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.settings] = {
    auth: true,
    title: 'pages.settings',
    layout: "account",
    description: '',
    middlewareMethod(to, from) {

    }
}

routeConfig[appAvailableRoutes.terms_of_service] = {
    auth: false,
    title: 'pages.terms_of_service',
    layout: "default",
    description: 'Read the terms of service to understand your rights and responsibilities as a Faynn user.',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.privacy_and_policy] = {
    auth: false,
    title: 'pages.privacy_and_policy',
    layout: "default",
    description: 'Learn about how we protect your personal data at Faynn and our commitment to your privacy.',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.confirm_email] = {
    auth: false,
    title: 'pages.confirm_email',
    layout: 'default',
    description: 'Confirm your email address to ensure all communications regarding your Faynn account are secure.',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.reset_password] = {
    auth: false,
    title: 'pages.reset_password',
    layout: 'default',
    description: 'Easily reset your password to maintain the security of your Faynn account.',
    middlewareMethod(to, from) {

    }
};

export default routeConfig;