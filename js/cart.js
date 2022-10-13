const USUARIO_25801 = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let array = [];
let multiplicarArray = []
// funciones
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

   
    


// DOM
   document.addEventListener("DOMContentLoaded", function(){

    getJSONData(USUARIO_25801).then(function(resultObj){
        if (resultObj.status === "ok"){
            array = resultObj.data
            showCart()
            multiplicar()
        }
    })

});