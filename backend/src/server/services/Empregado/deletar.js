const { readEmpregados, saveEmpregados } = require("../../../databases/Empregado");
const { IdError } = require("../../../errors");

const deletar = async (id) => {
    const empregados = await readEmpregados()

    const index = empregados.findIndex(empregado => empregado.id === id)
    if (index < 0) {
        throw new IdError;
    }

    empregados.splice(index, 1);
    await saveEmpregados(empregados);
};

module.exports = deletar;