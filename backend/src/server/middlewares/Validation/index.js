//Para agrupar middlewares de Validação

const EmpregadoValidation = require("./empregado");
const ComunValidation = require("./comun");

module.exports = {
    EmpregadoValidation,
    ComunValidation
};