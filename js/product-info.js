let product = localStorage.getItem("prodID");
let prodArray = [];

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
                    <div id="imagenes">
                    <img class="img-thumbnail" src= "${producto.images[0]}" width="300px" height = "200px">
                    <img class="img-thumbnail" src= "${producto.images[1]}" width="300px" height = "200px">
                    <img class="img-thumbnail" src= "${producto.images[2]}" width="300px" height = "200px">
                    <img class="img-thumbnail" src= "${producto.images[3]}" width="300px" height = "200px">
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
            <label style><strong>${comment.user}  </strong><small class="text-muted"><em>${comment.dateTime}</small></em>  ${starRating(comment.score)}</label> 
            </h5>
            <p style="text-align: left; padding-left: 170px;" id="descriptionComment">${comment.description}</p>
          </div>
        `
        document.getElementById("comentarios").innerHTML = htmlContentToAppend;
    };
};

// muestra puntuacion con estrellas
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
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL + product + EXT_TYPE).then(function(resultObj){
        comments = resultObj.data;
        showComments(comments);
    });
    
 
});




