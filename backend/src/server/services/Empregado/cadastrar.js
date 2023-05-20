const uuid = require("uuid");

const { saveEmpregados, readEmpregados } = require("../../../databases/Empregado");
const { readDepartamentos } = require("../../../databases/Departamento");
const { EmailError } = require("../../../errors");

const cadastrar = async (empregado) => {
    const id = uuid.v4();
    const email = empregado.email;
    const departamentoIn = empregado.departamento;
    const empregados = await readEmpregados();

    if (empregados.some(empregado => empregado.email === email)) {
        throw new EmailError;
    }

    if (departamentoIn) {
        const departamentos = await readDepartamentos()
        if (departamentos.some(departamento => departamento.nome === departamentoIn)) {

        } else {
            throw new DepartamentoError()
        }
    }

    empregados.unshift({ id, ...empregado });
    await saveEmpregados(empregados)
    
    return id;
};

module.exports = cadastrar;