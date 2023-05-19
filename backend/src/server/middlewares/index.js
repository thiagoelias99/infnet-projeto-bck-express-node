//Para agrupar middlewares

const Validation = require("./Validation");
const errorHandler = require("./ErrorHandler");

module.exports = {
    Validation,
    errorHandler
};