function iniciar(){
    let usuario ={}
    usuario.nombre = document.getElementById('usuario').value;
    usuario.contraseña = document.getElementById('contraseña').value;

    if( usuario.nombre === "" || usuario.contraseña === ""){
        alert ('Ingrese usuario y clave');
    } else {
        localStorage.setItem('item',usuario);
        location.href="index.html";
    }
}

document.addEventListener('DOMContentLoaded',()=>{

    document.getElementById('login').addEventListener('click',()=>{
        iniciar();
    });
})