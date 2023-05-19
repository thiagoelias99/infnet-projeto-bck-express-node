const fs = require("fs")
const { JsonError } = require("../errors")
let dados;

async function readJson(databaseName) {
    const filePath = __dirname
    const encoding = "utf-8";

    return dados = await fs.promises
        .readFile(`${filePath}\\${databaseName}.json`, encoding)
        .then(data => JSON.parse(data))
        .catch(err => { throw new JsonError(err) })
}

module.exports = readJson