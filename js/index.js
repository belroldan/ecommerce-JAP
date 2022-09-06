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
    /* fue movido a init para que se muestre el usuario en todos los html
    let email = localStorage.getItem("email");
    if (email !== null){
        document.getElementById("usuario").innerHTML = email;
    }
    */
    /*
    document.getElementById('login').addEventListener('onclick', function() {
        localStorage.getItem("email");
        window.location = "index.html"
    });*/
});


