import {Axios} from "axios";
import config from "../config.json";

const axiosConfig = {
    baseURL: config.apiUrl,

}

export const httpClient = new Axios(axiosConfig);

httpClient.interceptors.request.use((config) => {
    console.log("request", config);
    return config;
});

httpClient.interceptors.response.use((response) => {
    console.log("response", response);

    if (response.status >= 400) {
        const errorMsg = JSON.parse(response.data)?.errorMessage ?? "An error was occurred";
        return Promise.reject(errorMsg);
    }
    return response;
}, (error) => {
    console.log("response.error", error);
    console.error(error)
    return Promise.reject(error);
});

