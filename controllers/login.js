const getLogin=function(req,res){
    res.render("login");
}

const postLogin=function(req,res){
    res.send("ok");
}

module.exports ={getLogin,postLogin}