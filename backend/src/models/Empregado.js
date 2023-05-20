const Joi = require("joi");

const Empregado = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    salario: Joi.number().min(1).required(),
    idade: Joi.number().min(16).required(),
    departamento: Joi.string().default(""),
});

module.exports = Empregado;