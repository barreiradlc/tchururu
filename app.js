const express = require("express");
const app = express();
const morgan = require("morgan");
const getPost = require('./rotas/post');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
dotenv.config();



mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB conectado ihhhu'));

mongoose.connection.on('error', err => {
    console.log(`deu ruim tio ${err.message}`)
});
// // midlle
// const myMiddleware = (req, res, next) =>{
//     console.log("Katiou");
//     next();
// };
// app.use(myMiddleware);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", getPost); 


const port = process.env.POST || 8080;
app.listen(port, () => {
    console.log(`app na porta ${port}`)
});