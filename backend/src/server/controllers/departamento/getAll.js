const { StatusCodes } = require("http-status-codes");

const { DepartamentoService } = require("../../services");

const post = async (req, res, next) => {
    try {
        const result = await DepartamentoService.listarTodos(req.body);

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = post;