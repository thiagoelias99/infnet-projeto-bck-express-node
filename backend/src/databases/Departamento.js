const readJson = require("./readJSON")
const writeJson = require("./writeJSON.js.js")

const readDepartamentos = async () => {
    return await readJson("Departamentos")
}

const saveDepartamentos = async (departamentos) => {
    await writeJson(departamentos, "Departamentos")
}

module.exports = { readDepartamentos, saveDepartamentos }