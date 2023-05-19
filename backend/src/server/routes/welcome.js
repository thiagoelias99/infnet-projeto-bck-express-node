const express = require("express");
const { StatusCodes } = require("http-status-codes");
const router = express.Router();

router.get("/", (req, res) => {
    const data = new Date();
    res.status(StatusCodes.OK).json({
        msg: "Hello World",
        time: data
    });
});

module.exports = router;