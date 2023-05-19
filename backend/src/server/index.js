const express = require("express");
const cors = require("cors");

const router = require("./routes");
const {
    errorHandler
} = require("./middlewares");

const server = express();
const port = 3333;

// Configuração do middleware controle de Cors
server.use(cors());

// Configuração do middleware "parser de body"
server.use(express.json());

// Configuração de rotas
server.use(router);

// Configuração de middleware de erros
server.use(errorHandler);

server.listen(port, () => {
    const date = new Date();
    console.log(`Node server started in ${date.toLocaleString()} at http://localhost:${port}`);
});

module.exports = server;