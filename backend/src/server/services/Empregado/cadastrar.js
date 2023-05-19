const uuid = require("uuid");

const { saveEmpregados, readEmpregados } = require("../../../databases/Empregado");
const { EmailError } = require("../../../errors");

const cadastrar = async (empregado) => {
    const id = uuid.v4();
    const email = empregado.email;
    const empregados = await readEmpregados();

    if (empregados.some(empregado => empregado.email === email)) {
        throw new EmailError;
    }

    empregados.push({ id, ...empregado });
    saveEmpregados(empregados)
    
    return id;
};

module.exports = cadastrar;