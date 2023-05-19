const express = require("express");
const { StatusCodes } = require("http-status-codes");
const router = express.Router();

router.all("*", (req, res) => {
    res.status(StatusCodes.BAD_REQUEST).json({message: "Rota não encontrada"})
})

module.exports = router;