document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});


document.addEventListener('DOMContentLoaded',()=>{

    let usuario = localStorage.getItem('item');

    if(usuario===null){
        alert('Debes iniciar sesion para ver esta pagina');
        location.href="login.html";
    } else {
        document.getElementById('usuario').innerHTML=usuario.nombre;
        document.getElementById('contraseña').innerHTML=usuario.contraseña;
    }
})