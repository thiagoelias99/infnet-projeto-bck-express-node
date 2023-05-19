const express = require("express");
const router = express.Router();

const { Validation } = require("../middlewares");
const { EmpregadoController } = require("../controllers");
const path = "/empregados"

router.route(path)
    .post(Validation.EmpregadoValidation.post, EmpregadoController.post)
    .get(EmpregadoController.getAll);

router.route(`${path}/:id`)
    .all(Validation.ComunValidation.reqParams)
    .put(Validation.EmpregadoValidation.put, EmpregadoController.put)
    .delete(Validation.ComunValidation.reqParams, EmpregadoController.del);
module.exports = router;