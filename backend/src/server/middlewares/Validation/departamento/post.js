const { Departamento } = require("../../../../models");

const cadastro = (req, res, next) => {
    const { error } = Departamento.validate(req.body);
    if (error) {
        console.log(error);
        next(error);
    }
    next();
};

module.exports = cadastro;