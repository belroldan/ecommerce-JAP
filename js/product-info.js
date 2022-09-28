// variables
let product = localStorage.getItem("prodID");
let prodArray = [];
let prod = "";

// funciones

//funcion que muestra la info de los productos
function showProdInfo(array){
        let htmlContentToAppend = "";
            let producto = array;
            htmlContentToAppend += `
            <div id="datosprod">
                <h3>${producto.name}</h3>
                <hr my-3>
                    <label><b>Precio</b></label>
                        <p>${producto.currency} ${producto.cost}</p>
                    <label><b>Descripción</b></label>
                        <p>${producto.description}</p>
                    <label><b>Categoría</b></label>
                        <p>${producto.category}</p>
                    <label><b>Cantidad de vendidos</b></label>
                        <p>${producto.soldCount}</p> 
                    <label><b>Imágenes ilustrativas</b></label>

                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="${producto.images[0]}" class="d-block w-100">
                      </div>
                      <div class="carousel-item">
                        <img src="${producto.images[1]}" class="d-block w-100">
                      </div>
                      <div class="carousel-item">
                        <img src="${producto.images[2]}" class="d-block w-100">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
            ` 
         document.getElementById('prodinfo').innerHTML = htmlContentToAppend; 
    };

//funcion que muestra comentarios del json
function showComments(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let comment = array[i];
        htmlContentToAppend += `
    
        <div id="comentario">

            <h5 style="text-align: left;">
            <label style="display: inline-flex; padding-left: 170px;"><i class="fas fa-user-alt"></i></label>
            <label><strong>${comment.user}  </strong><small class="text-muted"><em>${comment.dateTime}</small></em>  ${starRating(comment.score)}</label> 
            </h5>
            <p style="text-align: left; padding-left: 170px;" id="descriptionComment">${comment.description}</p>
          </div>
        `
        document.getElementById("comentarios").innerHTML = htmlContentToAppend;
    };
};

// funcion que muestra productos relacionados
function showRelated(){
    let htmlContentToAppend="";
    for(let i = 0; i < prodArray.relatedProducts.length; i++){
    let related = prodArray.relatedProducts[i];
    htmlContentToAppend+=`
    <div class="card" style="width: 31rem; margin: 0px 30px; cursor: pointer;"" onclick="setRelProdID(${related.id})">
    <img src="${related.image}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${related.name}</h5>
    </div>
    </div>
  `
  document.getElementById("relatedProd").innerHTML = htmlContentToAppend;
  }};

// funcion que guarda el ID del producto relacionado y actualiza product-info.html
function setRelProdID(id) {
    localStorage.setItem("prodID", id);
    location.href = "product-info.html";
};

// variable que muestra puntuacion con estrellas
let starRating = (score) => {
	let estrellas = "";
	for (let i = 1; i <= 5; i ++) {
        if (i<=score){
            estrellas += `<i class="fas fa-star" id="checked"></i>`;
        } else {
            estrellas += '<i class="far fa-star"></i>';
        }
	} return estrellas; 
};


// DOM
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL + product + ".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            prodArray = resultObj.data;
            showProdInfo(prodArray);
            showRelated();
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL + product + EXT_TYPE).then(function(resultObj){
        comments = resultObj.data;
        showComments(comments);
    });

});




