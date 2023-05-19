const { readEmpregados, saveEmpregados } = require("../../../databases/Empregado");
const { EmailError, IdError } = require("../../../errors");

const atualizar = async (id, empregado) => {
    const empregados = await readEmpregados();
    const email = empregado.email;
    const index = empregados.findIndex(empregado => empregado.id === id)

    if (index < 0) {
        throw new IdError;
    }

    empregadosBck = empregados
    empregadosBck.splice(index, 1)

    if (empregadosBck.some(empregado => empregado.email === email)) {
        throw new EmailError;
    }

    empregados[index] = { id, ...empregado }
    await saveEmpregados(empregados);
};

module.exports = atualizar;