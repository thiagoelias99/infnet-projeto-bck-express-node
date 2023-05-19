const uuid = require("uuid");

const empregados = require("../../../databases/Empregado");
const { EmailError } = require("../../../errors");

const cadastrar = (empregado) => {
    const id = uuid.v4();
    const email = empregado.email;

    if (empregados.some(empregado => empregado.email === email)) {
        throw new EmailError;
    }
    empregados.push({ id, ...empregado });
    return id;
};

module.exports = cadastrar;