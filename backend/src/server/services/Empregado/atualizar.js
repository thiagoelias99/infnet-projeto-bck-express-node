const { readEmpregados, saveEmpregados } = require("../../../databases/Empregado");
const { EmailError, IdError } = require("../../../errors");

const atualizar = async (id, empregado) => {
    const empregados = await readEmpregados();
    const email = empregado.email;
    const index = empregados.findIndex(empregado => empregado.id === id)

    if (index < 0) {
        throw new IdError;
    }
    empregados.splice(index, 1)

    if (empregados.some(empregado => empregado.email === email)) {
        throw new EmailError;
    }

    empregados.push({ id, ...empregado });
    await saveEmpregados(empregados);
};

module.exports = atualizar;