import colorUtilities from "assets/scripts/constants/colorUtilities";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('colorUtilities', {...colorUtilities});
});
