const Joi = require("joi");

const Empregado = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    salario: Joi.number().min(1).required(),
    idade: Joi.number().min(1).required(),
    departamento: Joi.string(),
});

module.exports = Empregado;