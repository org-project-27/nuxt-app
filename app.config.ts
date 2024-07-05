import { axiosConfigs } from "~/constants/configs/api.config";
import {availableLocales} from "~/constants/locales";

export default defineAppConfig({
    brandName: "Faynn",
    baseApiUrl: axiosConfigs.baseURL,
    defaultAppLang: availableLocales[0].iso,
    runtimeConfig: {
        public: {},
        private: {},
    },
});
