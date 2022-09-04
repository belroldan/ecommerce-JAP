const AUTOS_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const PRODUCTOS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
let category = localStorage.getItem('catID');
let lista = [];

// FUNCIONES
// funcion que muestra la categoria autos
function verLista(autos){
    let listaAutos = "";
    for (let auto of autos.products){
        listaAutos +=`<div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                    <img src="` + auto.image + `" alt="product image" class="img-thumbnail"> 
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ auto.name + " - " + auto.currency + " " + auto.cost + `</h4> 
                        <p> `+ auto.description + `</p> 
                        </div>
                        <small class="text-muted">` + auto.soldCount + ` artículos</small> 
                    </div>
                </div>
            </div>
        </div>
        `
       
    };
     document.getElementById('autos').innerHTML = listaAutos; 
    
};

// funcion que filtra los productos
function filtrar(){
    //parseInt porque es un string, y necesito un integer
    let inicial = parseInt(document.getElementById('min').value);//tomo el valor mínimo
    let final = parseInt(document.getElementById('max').value);//tomo el valor máximo
    let listaFiltrada = lista.filter(producto => producto.cost >= inicial && producto.cost <= final );
    // arr.sort((a,b)=>a-b)
    listaFiltrada.sort((ant,sig)=>ant.cost-sig.cost);

    verLista(listaFiltrada);
};

// DOM
document.addEventListener("DOMContentLoaded", function(e){
    // muestra autos
    getJSONData(AUTOS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            lista = resultObj.data;
            verLista(lista);
        }
    });
    // muestra todos los productos
    getJSONData(PRODUCTOS_URL + category + ".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            lista = resultObj.data;
            verLista(lista);
        }
    });
    // filtra todos los productos
    document.getElementById("filtro").addEventListener("click",()=>{
        filtrar()
    });

});