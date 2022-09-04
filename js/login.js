function ingresar(){
    let user = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;

    if (user !== "" && contraseña !== ""){
        localStorage.setItem("email", user);
        location.href = "index.html";
    } 
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('login').addEventListener('onclick',()=>{
        ingresar();
    });
});


