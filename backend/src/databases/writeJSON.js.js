const fs = require("fs")
const { JsonError } = require("../errors")

function writeJson(data, databaseName) {
    const filePath = __dirname
    const encoding = "utf-8";

    fs.promises
        .writeFile(`${filePath}\\${databaseName}.json`, JSON.stringify(data), encoding)
        .catch(err => { throw new JsonError(err) })
}

module.exports = writeJson