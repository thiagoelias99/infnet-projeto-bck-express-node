const empregados = require("../../../databases/Empregado");
const { IdError } = require("../../../errors");

const deletar = (id) => {
    const index = empregados.findIndex(empregado => empregado.id === id)
    console.log(index);
    if (index < 0) {
        throw new IdError;
    }

    console.log("🚀 ~ file: deletar.js:12 ~ deletar ~ empregados:", empregados)
    empregados.splice(index, 1);
    console.log("🚀 ~ file: deletar.js:12 ~ deletar ~ empregados:", empregados)
};

module.exports = deletar;