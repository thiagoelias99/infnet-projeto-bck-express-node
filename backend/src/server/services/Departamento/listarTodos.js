const {readDepartamentos} = require("../../../databases/Departamento");

const listarTodos = async () => {
    return await readDepartamentos();
};

module.exports = listarTodos;