// Variables



// Funciones

// Mostrar pagina solo si el usuario esta loggueado
function showPage() {
  if (!localStorage.getItem("email")) {
    let timerInterval;
    Swal.fire({
      icon: "error",
      title: "Error",
      html: "Debe iniciar sesion para acceder a su perfil.",
      timer: 3000,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        window.location.href = "login.html";
      }
    });

    
    
  }
}
// Muestra E-mail logueado
function showEmail(){
    email.innerHTML = localStorage.getItem("email");
}


//Validacion de Bootstrap
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


document.addEventListener('DOMContentLoaded', function (){
    showPage();
    
    let email = localStorage.getItem("email");
    document.getElementById("email").innerHTML = email;
    
})
