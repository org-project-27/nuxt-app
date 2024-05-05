export default defineNuxtPlugin((nuxt) => {
  const { i18n } = useI18nStore();
  nuxt.vueApp.use(i18n);
});