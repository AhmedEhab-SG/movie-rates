import axios from "axios";
import apiConfig from "./apiConfig";

const axiosInstance = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.params ||= {};
    config.params.api_key = apiConfig.apiKey;
    return config;
  },
  (error) => {
    return console.log(error);
  }
);

export default axiosInstance;
