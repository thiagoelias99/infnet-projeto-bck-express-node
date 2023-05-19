class IdError extends Error {
    constructor(message = "Id inválido") {
        super(message);
    }
}

module.exports = IdError;