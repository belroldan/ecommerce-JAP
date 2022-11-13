const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

// Funcion que cierra sesion y redirecciona al login
let bntLogOut = document.getElementById("logout"); // botón logout

function logOut(){

  localStorage.getItem("email");
  localStorage.removeItem("email");

  localStorage.getItem('firstname'); 
  localStorage.removeItem("firstname");

  localStorage.getItem('secname');
  localStorage.removeItem("secname");

  localStorage.getItem('firstlast');
  localStorage.removeItem("firstlast");

  localStorage.getItem('seclast');
  localStorage.removeItem("seclast");

  localStorage.getItem('secemail');
  localStorage.removeItem("secemail");

  localStorage.getItem('phone');
  localStorage.removeItem("phone");

  window.location = "login.html"
}

// DOM
document.addEventListener('DOMContentLoaded', function(){
  let email = localStorage.getItem("email");
    if (email !== null){
        // muestra email en navbar
        document.getElementById("usuario").innerHTML = email;
        
    }
    // Al dar clic en el botón "logout" se aplica la función
    bntLogOut.addEventListener('click', function(){
      logOut();
    })
    
})