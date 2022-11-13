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
// Guarda cambios
function saveChanges() {
  let firstname = document.getElementById('firstname').value;
  let secname = document.getElementById('secname').value;
  let firstlast = document.getElementById('firstlast').value;
  let seclast = document.getElementById('seclast').value;
  let phone = document.getElementById('phone').value;   

  localStorage.setItem('firstname', firstname)
  localStorage.setItem('secname', secname)
  localStorage.setItem('firstlast', firstlast)
  localStorage.setItem('seclast', seclast)
  localStorage.setItem('phone', phone)
}

// Agarra cambios
function grabChanges() {
  firstname.value = localStorage.getItem('firstname') 
  secname.value = localStorage.getItem('secname')
  firstlast.value = localStorage.getItem('firstlast')
  seclast.value = localStorage.getItem('seclast')
  phone.value = localStorage.getItem('phone')
}

// DOM
document.addEventListener('DOMContentLoaded', function () {
  // agarra el email de localstorage
  let email = localStorage.getItem("email");
  // muestra email de login en input email 
  document.getElementById("secemail").value = email

  grabChanges();
  showPage();

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
          } else {
            saveChanges();
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()
})
