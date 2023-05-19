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
router.get("/empregados", EmpregadoController.getAll);
router.delete("/empregados/:id",Validation.ComunValidation.reqParams, EmpregadoController.del);
router.put("/empregados/:id",Validation.ComunValidation.reqParams, Validation.EmpregadoValidation.put, EmpregadoController.put);

module.exports = router;