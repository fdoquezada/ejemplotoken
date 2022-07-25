//cargas de las librerias 
const express= require("express");
//iniciacion del router donde guardamos las librerias las rutas del login
const router= express.Router();
//carga de las funciones del controlador de login
const{getLogin,postLogin}=require("../controllers/login");
//agregar las rutas
router.get("/",getLogin);
router.post("/",postLogin);

module.exports=router;
