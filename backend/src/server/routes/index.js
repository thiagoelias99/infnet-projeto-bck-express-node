const express = require("express");
const router = express.Router();

const EmpregadosRoutes = require("./empregados")
const DepartamentosRoutes = require("./departamentos")
const Route404 = require("./404")
const WelcomeRoute = require("./welcome")

router.use(WelcomeRoute)
router.use(EmpregadosRoutes);
router.use(DepartamentosRoutes);
router.use(Route404);

module.exports = router;