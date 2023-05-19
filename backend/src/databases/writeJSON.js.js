const fs = require("fs")

function writeJson(data, databaseName) {
    const filePath = __dirname
    const encoding = "utf-8";

    fs.promises
        .writeFile(`${filePath}\\${databaseName}.json`, JSON.stringify(data), encoding)
        .then((data) => console.log(data))
        .catch(err => { throw new Error(err) })
}

module.exports = writeJson