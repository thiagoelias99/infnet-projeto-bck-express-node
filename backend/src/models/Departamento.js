const Joi = require("joi");

const Departamento = Joi.object({
    nome: Joi.string().required(),
    cidade: Joi.string().required(),
});

module.exports = Departamento;