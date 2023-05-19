class JsonError extends Error {
    constructor(message = "Unable to access the data file") {
        super(message);
    }
}

module.exports = JsonError;