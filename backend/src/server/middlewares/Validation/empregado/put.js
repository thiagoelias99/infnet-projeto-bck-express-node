const { Empregado } = require("../../../../models");

const cadastro = (req, res, next) => {
    const { error } = Empregado.validate(req.body);
    if (error) {
        console.log(error);
        next(error);
    }
    next();
};

module.exports = cadastro;