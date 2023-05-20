const { readDepartamentos, saveDepartamentos } = require("../../../databases/Departamento");
const { readEmpregados, saveEmpregados } = require("../../../databases/Empregado");
const { IdError } = require("../../../errors");

const atualizar = async (id, departamento) => {
    const departamentos = await readDepartamentos();

    const index = departamentos.findIndex(departamento => departamento.id === id)

    if (index < 0) {
        throw new IdError;
    }

    const nomeDepartamento = departamentos[index].nome
    const empregados = await readEmpregados()
    for (const empregado of empregados) {
        if (empregado.departamento) {
            if (empregado.departamento === nomeDepartamento) {
                empregado.departamento = departamento.nome
            }
        }
    }

    departamentos[index] = { id, ...departamento }

    await saveDepartamentos(departamentos);
    await saveEmpregados(empregados);
};

module.exports = atualizar;