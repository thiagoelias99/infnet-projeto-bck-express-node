const express = require("express");
const router = express.Router();

const EmpregadosRoutes = require("./empregados")
const Route404 = require("./404")
const WelcomeRoute = require("./welcome")

router.use(WelcomeRoute)
router.use(EmpregadosRoutes);
router.use(Route404);

module.exports = router;