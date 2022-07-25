//cargar de librerias
const express = require('express');
const router=require("./routes");
const morgan= require("morgan");

//configuracion
const app = express();
app.use(morgan("start"));
//carpeta de archivos estaticos
app.use(express.static(__dirname+"public"));
//motor de vistas ejs
app.set("views engine", "ejs");
//carpeta de las vistas
app.set("views",__dirname+"/views");

//cargra las rutas --- siempre al final
app.use("/",router);
module.exports=app;