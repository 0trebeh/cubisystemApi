const express = require("express");
const fileUpload = require('express-fileupload');
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

//inicializaciones
const server = express();

//Middlewares
server.use(cors());
server.use(helmet());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "./uploads",
    })
);

//rutas
server.use('/api/users', require('./routes/users'));

module.exports = server;