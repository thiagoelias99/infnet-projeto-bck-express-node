class IdError extends Error {
    constructor(message = "Invalid ID") {
        super(message);
    }
}

module.exports = IdError;