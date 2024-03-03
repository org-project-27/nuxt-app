import { axiosConfigs } from "@/assets/scripts/configs/api.config";

export default defineAppConfig({
    brandName: "faynn.com",
    baseApiUrl: axiosConfigs.baseURL,
    runtimeConfig: {
        public: {
        },
        private: {
        },
    },
});
