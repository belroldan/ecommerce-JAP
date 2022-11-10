function ingresar(){
    let user = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;

    if (user !== "" && contraseña !== ""){
        localStorage.setItem("email", user);
        location.href = "index.html";
    } 
}

// Validacion de Bootstrap
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
          } else if (form.checkValidity()){
            ingresar()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
