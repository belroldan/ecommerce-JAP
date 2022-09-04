const AUTOS_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const PRODUCTOS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
let category = localStorage.getItem('catID');
let lista = [];
let categoriesArray = [];

// FUNCIONES
// muestra todas las categorias
function mostrarCategorias(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let categoria = array[i];
        htmlContentToAppend += `<div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                    <img src="` + categoria.image + `" alt="product image" class="img-thumbnail"> 
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ categoria.name + " - " + categoria.currency + " " + categoria.cost + `</h4> 
                        <p> `+ categoria.description + `</p> 
                        </div>
                        <small class="text-muted">` + categoria.soldCount + ` artículos</small> 
                    </div>
                </div>
            </div>
        </div>
        ` 
    };
     document.getElementById('cat').innerHTML = htmlContentToAppend; 
};

// funcion que filtra los productos
 function filtrar(){
    //parseInt porque es un string, y necesito un integer
    let minimo = parseInt(document.getElementById('rangeFilterCountMin').value);//tomo el valor mínimo
    let maximo = parseInt(document.getElementById('rangeFilterCountMax').value);//tomo el valor máximo
    let listaFiltrada = categoriesArray.filter(producto => producto.cost >= minimo && producto.cost <= maximo );
    // arr.sort((a,b)=>a-b)
    listaFiltrada.sort((ant,sig)=>ant.cost-sig.cost);

    mostrarCategorias(listaFiltrada);
}; 

function limpiar(){
        document.getElementById("rangeFilterCountMin").value = ""
        document.getElementById("rangeFilterCountMax").value = ""
        filtrar()
}


// DOM
document.addEventListener("DOMContentLoaded", function(e){
    // muestra todos las categorias
    getJSONData(PRODUCTOS_URL + category + ".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data.products;
            mostrarCategorias(categoriesArray);
        }
    });
    // filtra todos los productos
    document.getElementById("rangeFilterCount").addEventListener("click",()=>{
        filtrar()
    });
        document.getElementById("sortAsc").addEventListener("click", function(){
            let result = [];
            result = categoriesArray.sort(function(a, b) {
                if ( a.cost < b.cost ){ return -1; }
                if ( a.cost > b.cost ){ return 1; }
                return 0;
            });
            mostrarCategorias(result)
        });
    
        document.getElementById("sortDesc").addEventListener("click", function(){
            let result = [];
            result = categoriesArray.sort(function(a, b) {
                if ( a.cost > b.cost ){ return -1; }
                if ( a.cost < b.cost ){ return 1; }
                return 0;
            });
            mostrarCategorias(result)
        });
    
        document.getElementById("sortByCount").addEventListener("click", function(){
            let result = [];
            result = categoriesArray.sort(function(a, b) {
                let aCount = parseInt(a.soldCount);
                let bCount = parseInt(b.soldCount);
    
                if ( aCount > bCount ){ return -1; }
                if ( aCount < bCount ){ return 1; }
                return 0;
            });
            mostrarCategorias(result)
        });
        document.getElementById("clearRangeFilter").addEventListener("click",()=>{
            limpiar()
        });

});


// ENTREGA 1 (muestra AUTOS)

// funcion que muestra la categoria autos (entrega 1)
/* function verLista(autos){
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

document.addEventListener("DOMContentLoaded", function(e){
    // muestra autos
    /*getJSONData(AUTOS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            lista = resultObj.data;
            mostrarCategorias(lista);
        }
    });

*/