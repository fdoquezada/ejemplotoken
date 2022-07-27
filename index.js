//cargar de librerias
const chalk = require("chalk");
const app=require("./app");
require("dotenv").config();
//iniiciar del server
app.listen(process.env.APP_PORT,function() {
    //console.log("********* "+chalk.blue.inverse("Servidor iniciado en el puerto:  " + process.env.APP_PORT)+" ******" )
    console.log(`Example app listening on http://localhost:${process.env.APP_PORT}!`)
    
})

