//caragr express/express
const express = require("express");
//funciones
const {getHome}= require("../controllers/home");
//creamos el router donde
const router = express.Router();

//asignar la rutas
router.get("/",getHome);

module.exports = router