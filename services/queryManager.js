import axios from "axios";

export const axiosInstance = axios.create({
//#TODO: Pull baseUrl from an .env file!
  //baseURL: "/api",
  baseURL: "https://faynn.com/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  },
});

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
  const access_token = localStorage.getItem('access_token');
  config.headers["Authorization"] = "Bearer " + access_token;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);
