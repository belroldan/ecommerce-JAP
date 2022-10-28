const USUARIO_25801 = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let array = [];
let multiplicarArray = []

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

    let callehtml = "";
    let esquinahtml = "";
    let numerohtml  = "";
    if (calle === ""){
        callehtml += `
        Ingresa una calle.
        `
    } document.getElementById("calleFeedback").innerHTML = callehtml;

    if (esquina === ""){
        esquinahtml += `
        Ingresa una esquina.
        `
    } document.getElementById("esquinaFeedback").innerHTML = esquinahtml;

    if (numero === ""){
        numerohtml += `
        Ingresa un número.
        `
    } document.getElementById("numeroFeedback").innerHTML = numerohtml;
   }


   // forma de pago
   function payment(){
    
   }

    
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
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()