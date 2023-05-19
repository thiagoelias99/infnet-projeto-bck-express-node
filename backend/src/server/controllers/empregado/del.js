const { StatusCodes } = require("http-status-codes");

const { EmpregadoService } = require("../../services");

const post = async (req, res, next) => {
    try {
        await EmpregadoService.deletar(req.params.id);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
};

module.exports = post;