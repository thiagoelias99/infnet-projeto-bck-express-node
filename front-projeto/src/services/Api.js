import axios from "axios";
import { responseInterceptor } from "./responseInterceptor";
import { errorInterceptor } from "./errorInterceptor";

export const Api = () => {
    const api = axios.create({
        baseURL: "http://localhost:3333",
    });

    api.interceptors.response.use(
        (response) => responseInterceptor(response),
        (error) => errorInterceptor(error),
    );

    return api;
};