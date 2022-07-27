//carga de modelo 
const {Usuario}=require('../models');
const jwt = require('../utils/jwt');
require("dotenv").config();

const getLogin=function(req,res){
    res.render("login");
}
//post  que captura los datos de email y password del formulario de login|
const postLogin= async function(req,res){
    if(!req.body){
        return res.status(500).json({error:"Error BODY"});
    }
    if (!req.body.email){
        return res.status(500).json({error:"ERROR  MAIL"});
    }
    let usuario;//VIENE DATOS OK
    try {
        usuario=await Usuario.findByPk(req.body.email);
    } catch (error) {
        console.log("Error al buscar usuario" + error.message);
        return res.status(500).json({error:"ERROR  BD"});
        
    }
    //revisar si se econtro un usuario con ese email
    if (!usuario){
        return res.status(400).json({error:"Usuario no encontrado"});
    }
    
    console.log(usuario.password);
    console.log(req.body.password);//los usuario no coinciden 
    if (usuario.password!=req.body.password){
       return res.status(401).json({error:"Error de Credenciales"});

    }
    //todo salio ok
   const token=await jwt.generarToken(usuario);
   res.cookie(process.env.jwt_COOKIE,token,{httpOnly:true});
   //enviamos info en la reponse
   res.header('auth-token', {token}).json({
    error:null,
    msg:"autenticacion correcta",
    token:token
   })
}



module.exports ={getLogin,postLogin}