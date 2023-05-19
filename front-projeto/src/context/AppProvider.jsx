import { createContext, useState, useEffect } from 'react';
export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [empregados, setEmpregados] = useState([]);

    const baseURL = process.env.BASE_URL || "http://localhost:3333";

    useEffect(() => {
        getEmpregados()
    }, [empregados]);

    function postEmpregados(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(baseURL + "/empregados", options)
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    return response.json();
                }
                response.json()
                    .then(response => alert(response.message))
                return new Error()
            })
    }

    function getEmpregados() {
        fetch(baseURL + "/empregados")
            .then((res) => res.json())
            .then((json) => setEmpregados(json))
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
    }

    return (
        <AppContext.Provider
            value={{
                empregados,
                setEmpregados,
                postEmpregados,
                getEmpregados,
                deleteEmpregados,
                updateEmpregados
            }}
        >
            {children}
        </AppContext.Provider>
    )
}