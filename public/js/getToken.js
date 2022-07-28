// se ejecuta cuando se carga la pagina
window.onload = function(e){
    //carga del formulario de la pagina
    let formulario=document.querySelector("form");
    //agregar el evento subit al formulario
    formulario.addEventListener("sumit", async function(e){
        e.preventDefault();
        let credenciales={
        // generar objeto por el id 
        //email:document.getElementById().value
        // o por el trafico "name"
        email:formulario.email.value,
        password:formulario.password.value
    }
    //enviar los datos al server comando
    let respuesta=await fetch("/login",{
        method: "POST",
        header:{"content-type":"aplication/json"},
        body:JSON.stringify(credenciales)
    })
    //verificar 
    

let datos =await respuesta.json();
//verificar que exiten datos al server comando
if(!datos){
    alert("Error : en la comunicaion");
    return;

}
if(datos.error){
      alert(datos.error);
      retun;
}
//no hay error en
//guaqrda el token en la memoria   de chrome o del navegador que usen 
localStorage.setItem("token_JWT_TEST",datos.token);
//redirigimos a la pagina principal
location.assign("/home");
})
}