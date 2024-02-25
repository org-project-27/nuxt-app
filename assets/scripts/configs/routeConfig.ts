import { type RouteConfigurations } from '~/assets/scripts/types/RouteConfigTypes';
import {i18n} from "~/plugins/i18n"; // Adjust the import path

const routeConfig: RouteConfigurations =  {
    default: {
        auth: false,
        title: i18n.global.t('pages.default'),
        layout: 'default',
        description: "Default description",
        middlewareMethod(to, from){

        }
    },
    "/": {
        auth: false,
        title: i18n.global.t('pages.main'),
        layout: 'default',
        description: "Welcome",
        middlewareMethod(to, from){
            //console.log('Main page')
        }
    },
    "/getstarted": {
        auth: false,
        title: i18n.global.t('pages.get_started'),
        layout: 'default',
        description: "Let's get started!",
        middlewareMethod(to, from){
            if(to.query.view){
                useSeoMeta({
                    title: i18n.global.t(`pages.${to.query.view}`)
                });
            }
        }
    },
    "/posts/*": {
        auth: false,
        title: i18n.global.t('pages.post'),
        layout: 'default',
        description: "No description",
        middlewareMethod(to, from){
            //console.log('Posts page function')
        }
    },
    "/account/user":{
        auth: true,
        title: i18n.global.t('pages.profile'),
        layout: "default",
        description: "No description",
        middlewareMethod(to,from) {

        }
    },
    "/account/favorites":{
        auth: true,
        title: i18n.global.t('pages.favorites'),
        layout: "default",
        description: "No description",
        middlewareMethod(to,from) {

        }
    },
    "/account/cart":{
        auth: true,
        title: i18n.global.t('pages.cart'),
        layout: "default",
        description: "No description",
        middlewareMethod(to,from) {

        }
    },
    "/terms_of_service":{
        auth: false,
        title: i18n.global.t('pages.terms_of_service'),
        layout: "default",
        description: "No description",
        middlewareMethod(to,from) {

        }
    },
    "/privacy_and_policy":{
        auth: false,
        title: i18n.global.t('pages.privacy_and_policy'),
        layout: "default",
        description: "No description",
        middlewareMethod(to,from) {

        }
    },
    //#TODO: These are examples. So delete it after if you don't need it enough.
    "/posts/example/*": {
        auth: false,
        title: "Example",
        layout: 'custom',
        description: "No description",
        middlewareMethod(to, from){
            //console.log('Posts page function')
        }
    },
    "/posts/link3": {
        auth: true,
        title: "POST AUTH NEED",
        layout: 'default',
        description: "No description",
        middlewareMethod(to, from){
            //console.log('Posts page special')
        }
    }
};

export default routeConfig;