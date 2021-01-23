import axios from "axios";
import { CLOUD_ENGG_API } from "./config";

const serverInstance = axios.create({
  baseURL: CLOUD_ENGG_API,
  timeout: 10000,
});

serverInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) config.headers["x-auth-token"] = token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { serverInstance };
