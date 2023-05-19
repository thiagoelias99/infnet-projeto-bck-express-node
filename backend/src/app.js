const server = require("./server");

function startApp() {
    server;
}

try {
    startApp();
} catch (error) {
    console.log("Fatal Error")
    console.log(error);
}