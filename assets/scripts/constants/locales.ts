import type { AvailableLocals } from "assets/scripts/types/LocalesType";
import en from "assets/locales/en";
import az from "assets/locales/az";
import ru from "assets/locales/ru";
export let availableLocales: AvailableLocals = [
    {
        messages: az,
        label: 'flags.az',
        iso: 'az-AZ',
    },
    {
        messages: en,
        label: 'flags.en',
        iso: 'en-US',
    },
    {
        messages: ru,
        label: 'flags.ru',
        iso: 'ru-RU'
    },
];