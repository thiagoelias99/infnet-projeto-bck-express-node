const express = require("express");
const router = express.Router();

const {
    Validation
} = require("../middlewares");

const {
    EmpregadoController
} = require("../controllers");

router.get("/", (req, res) => {
    const data = new Date();
    res.status(200).json({
        msg: "Hello World",
        time: data
    });
});

router.post("/empregados", Validation.EmpregadoValidation.post, EmpregadoController.post);

module.exports = router;