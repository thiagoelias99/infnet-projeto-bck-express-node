const { StatusCodes } = require("http-status-codes");

const { DepartamentoService } = require("../../services");

const post = async (req, res, next) => {
    try {
        const result = await DepartamentoService.cadastrar(req.body);
        res.status(StatusCodes.OK).json({ id: result });
    } catch (error) {
        next(error);
    }
};

module.exports = post;