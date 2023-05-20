const express = require("express");
const { StatusCodes } = require("http-status-codes");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(StatusCodes.OK).json({
        msg: "Olá, esta API foi desenvolvida por Thiago Elias para o projeto do curso Back-end com Express & Node.JS da Infnet",
    });
});

module.exports = router;