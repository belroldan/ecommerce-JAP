function ingresar(){
    let usuario = document.getElementById("email").value;
    let clave = document.getElementById("pwd").value;

    if (usuario !== "" && clave !== ""){
        sessionStorage.setItem('email',usuario);
        return location.href = "index.html"
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    
    document.getElementById('ingresar').addEventListener('submit',()=>{
        ingresar();
    });
});


