const {readEmpregados} = require("../../../databases/Empregado");

const listarTodos = async () => {
    return await readEmpregados();
};

module.exports = listarTodos;