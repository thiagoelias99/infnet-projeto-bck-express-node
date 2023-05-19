import { createContext, useState, useEffect } from 'react';
export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [empregados, setEmpregados] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);

    const baseURL = process.env.BASE_URL || "http://localhost:3333";

    useEffect(() => {
        getEmpregados()
        getDepartamentos()
    }, []);

    function postEmpregados(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(baseURL + "/empregados", options)
            .then(res => {
                if (res.status === 200 || res.status === 204) {
                    return res.json();
                }
                res.json()
                    .then(res => alert(res.message))
                return new Error()
            })
            .catch(error => alert("Unable to connect to the server"))
    }

    function getEmpregados() {
        fetch(baseURL + "/empregados")
            .then((res) => {
                if (res.status === 200 || res.status === 204) {
                    res.json().then((json) => setEmpregados(json))
                } else {
                    res.json()
                        .then(res => alert(res.message))
                }
            })
            .catch(error => alert("Unable to connect to the server"))
    }

    function updateEmpregados(id, data) {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(`${baseURL}/empregados/${id}`, options)
            .then(response => {
                if (response.status === 200 || response.status === 204) {
                    return
                }
                response.json()
                    .then(response => alert(response.message))
                return new Error()
            })
            .catch(error => alert("Unable to connect to the server"))
    }

    function deleteEmpregados(id) {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(`${baseURL}/empregados/${id}`, options)
            .then(response => {
                if (response.status === 200 || response.status === 204) {
                    return
                }
                response.json()
                    .then(response => alert(response.message))
                return new Error()
            })
            .catch(error => alert("Unable to connect to the server"))
    }

    function postDepartamentos(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(baseURL + "/departamentos", options)
            .then(res => {
                if (res.status === 200 || res.status === 204) {
                    return res.json();
                }
                res.json()
                    .then(res => alert(res.message))
                return new Error()
            })
            .catch(error => alert("Unable to connect to the server"))
    }

    function getDepartamentos() {
        fetch(baseURL + "/departamentos")
            .then((res) => {
                if (res.status === 200 || res.status === 204) {
                    res.json().then((json) => setDepartamentos(json))
                } else {
                    res.json()
                        .then(res => alert(res.message))
                }
            })
            .catch(error => alert("Unable to connect to the server"))
    }

    return (
        <AppContext.Provider
            value={{
                empregados,
                postEmpregados,
                getEmpregados,
                deleteEmpregados,
                updateEmpregados,
                departamentos,
                postDepartamentos,
                getDepartamentos
            }}
        >
            {children}
        </AppContext.Provider>
    )
}