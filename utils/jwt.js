//carga de librerias
const jwt=require("jsonwebtoken");
require("dotenv").config();

//genera token con clave secreta de .env
const generarToken =async function (usuario){
    const token=await  jwt.sign({
        email:usuario.email,
        nombre:usuario.nombre,
        username:usuario.username,
        role:usuario.idRol
    },
    process.env.JWT_SECRET,
    {
        expiresIn:"1h"
    }
    )
    return token;
}
//revisar si token es valido 
const verificarToken=async function (token){
try {
    return jwt.verify(token,process.env.JWT_SECRET);
} catch (error) {
    return null
}
}
module.exports={generarToken,verificarToken}
