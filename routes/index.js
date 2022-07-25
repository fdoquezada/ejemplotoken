//carga de librerias
const express=require("express");
const fs=require("fs");
const path=require("path");

//crear un router donde se guardan las rutas 
const router=express.Router();

//guardar el nombre de este archivo (index.js)
const basename=path.basename(__filename);


//leer los archivos que hay en la carpeta 
fs
  .readdirSync(__dirname)//buscar todos los nombres de lños archivos de la carpeta (routers)
  .filter(file => {//filtro  que devuelve los archivos que:
    //no empiezen por "."
    //que no sean este archivo (index.js)
    //que tengan extencion .js
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    //esto es nuevo 
    //ruters.use ("login",requieres(/"./routers/login.js"));
    router.use("/"+path.parse(file).name,require("./"+path.parse(file).base));
  });
  module.exports=router

