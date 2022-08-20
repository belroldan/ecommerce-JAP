function ingresar(){
    let usuario = document.getElementById("email").value;
    let clave = document.getElementById("contraseña").value;

    if (usuario !== "" && clave !== ""){
        sessionStorage.setItem('email',usuario);
        alert('success')
        return location.href = "index.html"
    } else {
        return location.href = "login.html"
    }

    
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('ingresar').addEventListener('submit',()=>{
        ingresar();
    })
})


