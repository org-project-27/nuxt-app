import { axiosConfigs } from "@/assets/scripts/configs/api.config";
import {availableLocales} from "assets/scripts/constants/locales";

export default defineAppConfig({
    brandName: "Faynn",
    baseApiUrl: axiosConfigs.baseURL,
    defaultAppLang: availableLocales[0].iso,
    runtimeConfig: {
        public: {},
        private: {},
    },
});
