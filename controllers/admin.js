//funcion GET DE LA RUTA /HOME
const getAdmin=function (req,res){
    res.render("admin",req.datos);
}
//exportamos la funcion
module.exports={getAdmin}