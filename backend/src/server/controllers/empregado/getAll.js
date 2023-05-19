const { StatusCodes } = require("http-status-codes");

const { EmpregadoService } = require("../../services");

const post = (req, res, next) => {
    try {
        const result = EmpregadoService.listarTodos(req.body);

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = post;