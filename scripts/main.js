
let id 



// función para agregar las recetas 
function agregarRecetasHTML(){
    let contador = 0
    contenedorRecetas.forEach(element => {
        let article = document.createElement('article');
        article.setAttribute('id', contador)
        let img = document.createElement('img');
        img.src = element.img
        let txt = document.createElement('p');
        article.appendChild(img)
        article.appendChild(txt)
        article.setAttribute('class', 'recetas-item');
        img.setAttribute('alt', element.nombre);
        txt.innerText = element.nombre;
        contenedrRecetasHTML.appendChild(article);
        contador++
    });
    contador = 0

    RecetasHTML = document.querySelectorAll('.recetas-item');

    RecetasHTML.forEach(element => {
        
        element.addEventListener('click', function(){
            recetaSeleccionada = this.getAttribute('id');
            
            ingredientesHTML.forEach(element => {
                if(contenedorRecetas[recetaSeleccionada].ingredientes[contador] != undefined){
                    element.innerText = contenedorRecetas[recetaSeleccionada].ingredientes[contador]
                    contador++
                } else {
                    element.innerHTML = ""
                    contador++
                }
            });
            contador = 0
        })

    });
}

function e (){

/*
    for (let i = 0; i < articulos.length; i++){
        articulos[i].addEventListener('click', function(){
            const idArticulo = this.id;
            console.log(idArticulo)
        })
    }
*/


}




function agregarIngredientesHTML(){

    ingredientesHTML.forEach(element => {
        if(receta.ingredientes[i] == Number){
            receta.ingredientes[i]
        } else {
            element.innerHTML = ""
        }
        
    });
}

agregarRecetasHTML();