const jwt=require("../utils/jwt");

//esta es para APIRESTFUL
const verificarSesionHeader=function (req,res){

}
//esta es para vistas
const verificarSesionCookie= asyn function (req,res, next){
    //si no hay cooki, redirijo
    if (!req.cookies){
        return res.redirect("/login");
    }
    //leo la cookie
    const token=req.cookie[process.env.JWT_COOKIE];
    //SI NO HAY TOKEN , LO NMANDO AL LOGIN 
    if(!token) {
        return res.redirect("/login");
    }
    //revisar si el token es valido
    let datos=await jwt.verificarToken(token);
    //si el token no es valido , redirijo
    if(!datos){
        return res.redirect("/login");
    }
}
//hay datos . todo ok , arreglo los datos al request y sigo el flujo
//en este caso hacia el controlador (a menos que se agregue otra middleware antes)
req.datos=datos;
next();
}