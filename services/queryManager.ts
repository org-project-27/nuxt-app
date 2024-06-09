import axios from "axios";
import { axiosConfigs } from "@/assets/scripts/configs/api.config";
import { useServiceManagementStore } from "#imports";

export const axiosInstance = axios.create(axiosConfigs);

const responseHandler = (response: any) => {
  const { queryKey } = response.config.env;
  if(queryKey){
    const { addToQueryHistories } = useServiceManagementStore();
    addToQueryHistories(queryKey);
  }
  return Promise.resolve(response);
};

const errorHandler = (error: any) => {
  const { queryKey } = error.config.env;
  if(queryKey){
    const { addToQueryHistories } = useServiceManagementStore();
    addToQueryHistories(queryKey);
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(async (config) => {
  config.headers["x-secret-key"] = "1D3d59U6ghCPj8W5Ev3w423BqSH6xJCduZFITrtdSdc";
  const { addToQueriesLoading, checkQueryIsLoadingByKey } = useServiceManagementStore();
  const queryKey = await addToQueriesLoading(config);

  // @ts-ignore
  config.env['queryKey'] = queryKey;

  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }

  if (!queryKey) {
    const axiosCancelToken = axios.CancelToken;
    const source = axiosCancelToken.source();
    config.cancelToken = source.token;
    source.cancel("Duplicate request: The request is already being loaded.");
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
    response => responseHandler(response),
    error => errorHandler(error)
);
