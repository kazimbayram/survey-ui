import {Axios} from "axios";
import config from "../config.json";

const axiosConfig = {
  baseURL: config.apiUrl, headers: {
    'Content-Type': 'application/json'
  }
}

export const httpClient = new Axios(axiosConfig);

httpClient.interceptors.request.use((config) => {
  if (config.data) {
    config.data = JSON.stringify(config.data);
    config.headers = {
      ...config.headers, 'Content-Type': 'application/json'
    }
    console.log("request", config);
  }

  return config;
});

httpClient.interceptors.response.use((response) => {
  console.log("response", response);

  if (response.status >= 400) {
    let errorMsg = response.status + ": An error was occurred";
    if (response.data) {
      errorMsg = JSON.parse(response.data)?.errorMessage ?? errorMsg;
    }
    return Promise.reject(errorMsg);
  }

  if (response.data) {
    return Promise.resolve(JSON.parse(response.data))
  }

  return response;

}, (error) => {
  console.log("response.error", error);
  console.error(error)
  return Promise.reject(error);
});

