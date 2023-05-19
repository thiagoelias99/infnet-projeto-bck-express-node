const uuid = require("uuid");

const { saveDepartamentos, readDepartamentos } = require("../../../databases/Departamento");

const cadastrar = async (departamento) => {
    const id = uuid.v4();
    const departamentos = await readDepartamentos();

    departamentos.unshift({ id, ...departamento });
    await saveDepartamentos(departamentos)
    
    return id;
};

module.exports = cadastrar;