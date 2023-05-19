const { StatusCodes } = require("http-status-codes");

const { EmpregadoService } = require("../../services");

const put = (req, res, next) => {
    try {
        EmpregadoService.atualizar(req.params.id, req.body);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
};

module.exports = put;