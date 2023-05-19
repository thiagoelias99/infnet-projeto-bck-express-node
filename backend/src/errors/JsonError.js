class JsonError extends Error {
    constructor(message = "Unable to access the data") {
        super(message);
    }
}

module.exports = JsonError;