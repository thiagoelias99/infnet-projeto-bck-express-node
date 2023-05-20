const { readEmpregados, saveEmpregados } = require("../../../databases/Empregado");
const { readDepartamentos } = require("../../../databases/Departamento");
const { EmailError, IdError, DepartamentoError } = require("../../../errors");

const atualizar = async (id, empregado) => {
    const empregados = await readEmpregados();
    const empregadosBck = await readEmpregados();
    const email = empregado.email;
    const departamentoIn = empregado.departamento;
    const index = empregados.findIndex(empregado => empregado.id === id)

    if (index < 0) {
        throw new IdError;
    }

    empregadosBck.splice(index, 1)

    if (empregadosBck.some(empregado => empregado.email === email)) {
        throw new EmailError;
    }

    if (departamentoIn) {
        const departamentos = await readDepartamentos()
        if (departamentos.some(departamento => departamento.nome === departamentoIn)) {

        } else {
            throw new DepartamentoError()
        }
    }

    empregados[index] = { id, ...empregado }
    await saveEmpregados(empregados);
};

module.exports = atualizar;