const empregados = require("../../../databases/Empregado");

const listarTodos = () => {
    return empregados;
};

module.exports = listarTodos;