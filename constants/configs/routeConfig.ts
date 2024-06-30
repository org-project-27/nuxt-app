import {type RouteConfigurations} from '~/constants/types/RouteConfigTypes';
import appAvailableRoutes from "~/constants/availableAppRoutes";

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
    description: 'Start your shopping journey on Faynn’s homepage, where you can discover our latest products, featured deals, and more!'
};

routeConfig[appAvailableRoutes.get_started] = {
    auth: false,
    title: 'pages.get_started',
    layout: 'default',
    description: 'New to Faynn? Click here to learn how to navigate our site, make purchases, and enjoy seamless shopping!',
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
    description: 'Stay updated with the latest posts about new arrivals, trends, and essential tips for savvy shopping on Faynn!',
    middlewareMethod(to, from) {
        //console.log('Posts page function')
    }
};

routeConfig[appAvailableRoutes.categories] = {
    auth: false,
    title: 'pages.categories',
    layout: 'default',
    description: 'Browse through a variety of categories to find exactly what you need—be it fashion, electronics, or home goods!',
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
    description: 'Your favorites in one place! Review items you’ve marked as favorites and easily add them to your cart!',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.cart] = {
    auth: true,
    title: 'pages.cart',
    layout: "default",
    description: 'Ready to make a purchase? Review your selections in your cart and proceed to checkout for a swift transaction!',
    middlewareMethod(to, from) {

    }
};

routeConfig[appAvailableRoutes.terms_of_service] = {
    auth: false,
    title: 'pages.terms_of_service',
    layout: "default",
    description: 'Read the terms of service to understand your rights and responsibilities as a Faynn shopper.',
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