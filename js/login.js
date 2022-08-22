function ingresar(){
    let user = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;

    if (user !== "" && contraseña !== ""){
        sessionStorage.setItem("email", user);
        location.href = "index.html";
    } 
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('ingresar').addEventListener('submit',()=>{
        ingresar();
    });
});


