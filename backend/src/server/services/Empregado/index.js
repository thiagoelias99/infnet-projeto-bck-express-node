//Para agrupar funções relacionadas ao Empregado

const cadastrar = require("./cadastrar");
const listarTodos = require("./listarTodos");
const deletar = require("./deletar");
const atualizar = require("./atualizar");

module.exports = {
    cadastrar,
    listarTodos,
    deletar,
    atualizar
};
