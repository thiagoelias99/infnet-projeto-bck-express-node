const { readDepartamentos, saveDepartamentos } = require("../../../databases/Departamento");
const { readEmpregados, saveEmpregados } = require("../../../databases/Empregado");
const { IdError } = require("../../../errors");

const deletar = async (id) => {
    const departamentos = await readDepartamentos()

    const index = departamentos.findIndex(departamento => departamento.id === id)
    if (index < 0) {
        throw new IdError;
    }

    const nomeDepartamento = departamentos[index].nome
    const empregados = await readEmpregados()
    for (const iterator of empregados) {
        if (empregados[iterator].departameto === nomeDepartamento) {
            empregados[iterator].departameto === ""
        }
    }

    departamentos.splice(index, 1);
    await saveDepartamentos(departamentos);
    await saveEmpregados(empregados);
};

module.exports = deletar;