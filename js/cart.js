// variables, arrays
const USUARIO_25801 = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let array = [];
let multiplicarArray = []

let feedback = document.getElementById("feedback")

let cardNumber = document.getElementById("cardNumber")
let secNumber = document.getElementById("secNumber")
let expireDate = document.getElementById("expireDate")
let accNumber = document.getElementById("accNumber")

let transferencia = document.getElementById("transferencia")
let creditCard = document.getElementById("creditCard")

let cerrarModal = document.getElementById("cerrarModal");

let finishBuy = document.getElementById("finish");

// funciones

    // muestra el producto del JSON en el carrito
    function showCart(){

        let img = "";
            for(let i = 0; i < array.articles.length; i++){
                
             let article = array.articles[i];
             // muestra imagen
             img += `
            <img src="${article.image}" width="60px">
            `
            document.getElementById("prodImg").innerHTML = img
            // muestra nombre
            let name = "";
            name += `
            ${article.name}
            ` 
            document.getElementById("prodName").innerHTML = name
            // muestra costo
            let cost = "";
            cost += `
            ${article.currency} ${article.unitCost}
            ` 
            document.getElementById("prodCost").innerHTML = cost
        } 
    }

    // multiplica la cantidad ingresada de articulos por el precio de la unidad
    function multiplicar(){
        let subtotal = parseInt(document.getElementById("prodQuantity").value);
        for(let i = 0; i < array.articles.length; i++){
            let article = array.articles[i];

            document.getElementById("prodSubtotal").innerHTML = "<strong>" + article.currency + " " + subtotal * article.unitCost + "</strong>"
            document.getElementById("subGeneral").innerHTML = subtotal * article.unitCost 
        } 
        if (isNaN(subtotal)){
            document.getElementById("prodSubtotal").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">Debes al menos colocar 1 artículo </div>`
        }
    }

    // valida el formulario 
   function validar(){
    let calle = document.getElementById("calle").value;
    let esquina = document.getElementById("esquina").value;
    let numero = document.getElementById("numero").value;

    let feedbackCalle = document.getElementById("calleFeedback");
    let feedbackEsq = document.getElementById("esquinaFeedback");
    let feedbackNum = document.getElementById("numeroFeedback");

   
    if (calle === ""){
        feedbackCalle.innerHTML = "Ingresa una calle."
    } 

    if (esquina === ""){
        feedbackEsq.innerHTML = "Ingresa una esquina."
    } 

    if (numero === ""){
        feedbackNum.innerHTML = "Ingresa un número."
    } 
   }


   // formas de pago
   // forma de pago por transferencia
   function paymentBank(){    
    if (transferencia.checked = true){
        accNumber.disabled = false;
        cardNumber.disabled = true;
        secNumber.disabled = true;
        expireDate.disabled = true;
        feedback.classList.remove("text")
        feedback.classList.add("text-success")
        feedback.textContent = "Ha seleccionado Transferencia."
    } 
   }

   // forma de pago por tarjeta de credito
   function paymentCard(){
    if (creditCard.checked = true){
        accNumber.disabled = true;
        cardNumber.disabled = false;
        secNumber.disabled = false;
        expireDate.disabled = false;
        feedback.classList.remove("text")
        feedback.classList.add("text-success")
        feedback.textContent = "Ha seleccionado Tarjeta De Credito."
    } 
   }

   // costo de envio
   function cost() {
    
    // opciones de envio
    let quinceporc = document.getElementById("15porc"); 
    let sieteporc = document.getElementById("7porc"); 
    let cincoporc = document.getElementById("5porc"); 

    // lugares donde se muestra el total
    
    let shipCost = document.getElementById("shipCost"); 
    let subGeneral = document.getElementById("subGeneral").innerHTML;
    
    if (quinceporc.checked) {
        // premium
        shipCost.innerHTML = Math.round(subGeneral*0.15) // 2280

        // express
      } else if (sieteporc.checked) { 
        shipCost.innerHTML =  Math.round(subGeneral*0.07) // 1064

        // standard
      } else if (cincoporc.checked) {
        shipCost.innerHTML =  Math.round(subGeneral*0.05) // 760
      } 

    // se muestra el total con la suma
      let total = document.getElementById("total"); 
     total.innerHTML = parseFloat(subGeneral) + parseFloat(shipCost.innerText);
    };
    
// DOM
   document.addEventListener("DOMContentLoaded", function(){

    getJSONData(USUARIO_25801).then(function(resultObj){
        if (resultObj.status === "ok"){
            array = resultObj.data
            showCart()
            multiplicar()
        };
    });
});

// Validation
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            validar()
            
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: '¡Algo salio mal!',
                text: 'Recuerda rellenar todos los campos.',
                showConfirmButton: true,
              })
            event.preventDefault()
            event.stopPropagation()

            // si se valida correctamente, aparece sweet alert
          } else if (form.checkValidity()){
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Compra exitosa!',
                showConfirmButton: true,
              })
            event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()