const getHome=function (req,res){
    res.render("index",req.datos);
}
module.exports{getHome}