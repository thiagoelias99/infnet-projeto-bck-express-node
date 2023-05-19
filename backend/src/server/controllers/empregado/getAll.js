const { StatusCodes } = require("http-status-codes");

const { EmpregadoService } = require("../../services");

const post = async (req, res, next) => {
    try {
        const result = await EmpregadoService.listarTodos(req.body);

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = post;