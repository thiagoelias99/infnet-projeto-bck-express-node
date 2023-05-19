const readJson = require("./readJSON")
const writeJson = require("./writeJSON.js.js")

const readDepartamentos = async () => {
    return await readJson("Departamentos")
}

const saveDepartamentos = (departamentos) => {
    writeJson(departamentos, "Departamentos")
}

module.exports = { readDepartamentos, saveDepartamentos }