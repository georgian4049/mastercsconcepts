import axios from "axios";
import { MASTER_CS_CONCEPT_API_URL } from "./config";

const serverInstance = axios.create({
  baseURL: MASTER_CS_CONCEPT_API_URL,
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
