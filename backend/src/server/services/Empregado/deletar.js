const empregados = require("../../../databases/Empregado");
const { IdError } = require("../../../errors");

const deletar = (id) => {
    const index = empregados.findIndex(empregado => empregado.id === id)
    console.log(index);
    if (index < 0) {
        throw new IdError;
    }

    empregados.splice(index, 1);
};

module.exports = deletar;