const { StatusCodes } = require("http-status-codes");

const { DepartamentoService } = require("../../services");

const post = async (req, res, next) => {
    try {
        await DepartamentoService.deletar(req.params.id);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
};

module.exports = post;