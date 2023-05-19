export const errorInterceptor = (error) => {
    console.log(error);
    console.log("aui");
    if (error.message === "Network Error") {
        return Promise.reject(new Error("Não foi possível conectar ao servidor"));
    }

    if (error.response?.status === 400) {
    }

    return Promise.reject(error);
};