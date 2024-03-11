import { axiosConfigs } from "@/assets/scripts/configs/api.config";

export default defineAppConfig({
    brandName: "FAYNN",
    baseApiUrl: axiosConfigs.baseURL,
    runtimeConfig: {
        public: {
        },
        private: {
        },
    },
});
