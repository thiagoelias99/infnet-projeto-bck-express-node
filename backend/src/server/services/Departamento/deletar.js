const { readDepartamentos, saveDepartamentos } = require("../../../databases/Departamento");
const { IdError } = require("../../../errors");

const deletar = async (id) => {
    const departamentos = await readDepartamentos()

    const index = departamentos.findIndex(departamento => departamento.id === id)
    if (index < 0) {
        throw new IdError;
    }

    departamentos.splice(index, 1);
    await saveDepartamentos(departamentos);
};

module.exports = deletar;