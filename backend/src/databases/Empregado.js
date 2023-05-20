const readJson = require("./readJSON")
const writeJson = require("./writeJSON.js")

const empregados = [];

const readEmpregados = async () => {
    return await readJson("Empregados")
}

const saveEmpregados = async (empregados) => {
    await writeJson(empregados, "Empregados")
}

module.exports = { empregados, readEmpregados, saveEmpregados }