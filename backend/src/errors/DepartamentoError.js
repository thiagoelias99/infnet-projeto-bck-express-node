class DepartamentoError extends Error {
    constructor(message = "Departamento not registered") {
        super(message);
    }
}

module.exports = DepartamentoError;