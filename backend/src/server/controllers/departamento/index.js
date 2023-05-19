//Para agrupar funções do controller

const post = require("./post");
const getAll = require("./getAll");
const del = require("./del");
const put = require("./put");

module.exports = {
    post,
    getAll,
    del,
    put
};