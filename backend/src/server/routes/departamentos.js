const express = require("express");
const router = express.Router();

const { Validation } = require("../middlewares");
const { DepartamentoController } = require("../controllers");
const path = "/departamentos"

router.route(path)
    .post(Validation.DepartamentoValidation.post, DepartamentoController.post)
    .get(DepartamentoController.getAll);

router.route(`${path}/:id`)
    .all(Validation.ComunValidation.reqParams)
    .put(Validation.DepartamentoValidation.put, DepartamentoController.put)
    .delete(DepartamentoController.del);
module.exports = router;