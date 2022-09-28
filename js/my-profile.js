
// Funcion que cierra sesion y redirecciona al login
function logOut(){
    localStorage.getItem("email");
    localStorage.removeItem("email");
    window.location = "login.html"
}

// DOM
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("logout").addEventListener("click",()=>{
        logOut()
    });
})