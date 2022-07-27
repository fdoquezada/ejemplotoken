//cargar de librerias
const express = require('express');
const router=require("./routes");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan= require("morgan");

//configuracion
const app = express();
app.use(morgan("dev"));
//carpeta de archivos estaticos
app.use(express.static("public"));
//motor de vistas ejs
app.set("view engine", "ejs");
//carpeta de las vistas
app.set("views",__dirname+"/views");

//body parser para leer datos de formulario
app.use(bodyParser.urlencoded({extends:false}));

app.use(cookieParser());
app.use(express.json());

//cargra las rutas --- siempre al final
app.use("/",router);
module.exports=app;