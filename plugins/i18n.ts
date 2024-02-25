import { createI18n } from 'vue-i18n';
import az from '~/assets/locales/az';
import en from '~/assets/locales/en';
import ru from '~/assets/locales/ru';

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'az',
  messages: { en, az, ru }
});

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n)
})