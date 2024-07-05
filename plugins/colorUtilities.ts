import colorUtilities from "~/constants/colorUtilities";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('colorUtilities', {...colorUtilities});
});
