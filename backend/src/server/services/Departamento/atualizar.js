const { readDepartamentos, saveDepartamentos } = require("../../../databases/Departamento");
const { IdError } = require("../../../errors");

const atualizar = async (id, departamento) => {
    const departamentos = await readDepartamentos();
    const index = departamentos.findIndex(departamento => departamento.id === id)

    if (index < 0) {
        throw new IdError;
    }

    departamentos[index] = { id, ...departamento }
    await saveDepartamentos(departamentos);
};

module.exports = atualizar;