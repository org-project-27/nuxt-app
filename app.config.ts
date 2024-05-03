import { axiosConfigs } from "@/assets/scripts/configs/api.config";

export default defineAppConfig({
    brandName: "Faynn",
    baseApiUrl: axiosConfigs.baseURL,
    defaultAppLang: 'az',
    runtimeConfig: {
        public: {
        },
        private: {
        },
    },
});
