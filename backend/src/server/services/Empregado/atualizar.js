const empregados = require("../../../databases/Empregado");
const { EmailError, IdError } = require("../../../errors");

const atualizar = (id, empregado) => {
    const email = empregado.email;
    if (empregados.some(empregado => empregado.email === email)) {
        throw new EmailError;
    }

    const index = empregados.findIndex(empregado => empregado.id === id)
    if (index < 0) {
        throw new IdError;
    }

    empregados[index] = {id, ...empregado};
};

module.exports = atualizar;