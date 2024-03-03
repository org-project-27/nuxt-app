import axios from "axios";
import { axiosConfigs } from "@/assets/scripts/configs/api.config.ts";

export const axiosInstance = axios.create(axiosConfigs);

const responseHandler = (response) => {
  //#TODO: Improve this section
  return Promise.resolve(response);
};
const errorHandler = (error) => {
  //#TODO: Improve this section
  return Promise.reject(error);
};

// This interceptor allows us to change user token dynamically
axiosInstance.interceptors.request.use((config) => {
  const access_token = localStorage.getItem("access_token");
  config.headers["Authorization"] = "Bearer " + access_token;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);
