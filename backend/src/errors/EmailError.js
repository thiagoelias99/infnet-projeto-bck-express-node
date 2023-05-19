class EmailError extends Error {
    constructor(message = "Email já cadastrado") {
        super(message);
    }
}

module.exports = EmailError;