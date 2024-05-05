import type { AvailableLocals } from "assets/scripts/types/LocalesType";
import en from "assets/locales/en";
import az from "assets/locales/az";
import ru from "assets/locales/ru";

import azFlag from "@/assets/images/icons/flags/az-AZ.svg";
import enFlag from "@/assets/images/icons/flags/en-US.svg";
import ruFlag from "@/assets/images/icons/flags/ru-RU.svg";
export let availableLocales: AvailableLocals = [
    {
        messages: az,
        label: 'az',
        iso: 'az-AZ',
        icon: azFlag
    },
    {
        messages: en,
        label: 'en',
        iso: 'en-US',
        icon: enFlag
    },
    {
        messages: ru,
        label: 'ru',
        iso: 'ru-RU',
        icon: ruFlag
    },
];