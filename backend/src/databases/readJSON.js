const fs = require("fs")

// function readJson(databaseName) {
//     const filePath = __dirname
//     const encoding = "utf-8";
    
//     let data;
    
    // fs.promises
    //     .readFile(`${filePath}\\${databaseName}.json`, encoding)
    //     .then((data) => {
    //         console.log("🚀 ~ file: readJSON.js:10 ~ .then ~ data:", data)
            
    //         return JSON.parse(data)
    //     })
    //     .catch(err => { throw new Error(err) })
// }

let dados;

async function readJson(databaseName) {
    const filePath = __dirname
    const encoding = "utf-8";

    return dados = await fs.promises
        .readFile(`${filePath}\\${databaseName}.json`, encoding)
        .then(data => JSON.parse(data))
        .catch(err => { throw new Error(err) })
}

module.exports = readJson