const { StatusCodes } = require("http-status-codes");

const Joi = require("joi");
const {
    EmailError,
    IdError,
    JsonError,
    DepartamentoError
} = require("../../../errors");

const errorHandler = (err, req, res, next) => {
    console.log(err);
    
    if (err instanceof Joi.ValidationError) { res.status(StatusCodes.BAD_REQUEST).json({ message: err.details[0].message }); return; }

    if (err instanceof EmailError) { res.status(StatusCodes.BAD_REQUEST).json({ message: err.message }); return; }
    
    if (err instanceof IdError) { res.status(StatusCodes.BAD_REQUEST).json({ message: err.message }); return; }

    if (err instanceof JsonError) { res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Unable to access the data file" }); return; }
    
    if (err instanceof DepartamentoError) { res.status(StatusCodes.BAD_REQUEST).json({ message: err.message }); return; }

    console.log("Servidor rodando...");
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
};

module.exports = errorHandler;