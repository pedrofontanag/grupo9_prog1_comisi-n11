let form = document.querySelector(".form");
let input = document.querySelector(".input");
let invalid = document.querySelector(".invalid");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let valida = true;
    if (input.value == "") {
        invalid.style.display = "block";
        invalid.innerText = "El campo está vacío";
        valida = false;
    } else if (input.value.length < 3) {
        invalid.style.display = "block";
        invalid.innerText = "Debe ser mayor a 3 caracteres";
        valida = false;
    }

    if (valida) {
        window.location.href = `./search-busqueda.html?search=${input.value}`;
    }
});
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idbusqueda = queryStringObj.get('id');

let contenedorBusqueda = document.querySelector(".buscador")
contenedorTitulo.innerText = idcategoria
let valida = true
fetch('https://dummyjson.com/recipes')
    .then(function(response) {
        return response.json()
  })

    .then(function(data) {
        let conteiner = document.querySelector(".buscador");
        for (let i = 0; i < data.recipes.length; i++) {
            const element = data.recipes[i];
            if(contenedorBusqueda == element.tag){
                let nombre = element.name;
                let dificultad = element.difficulty; 
                let imagen = element.image;
                let id = element.id;
                let cartaHTML= `<article class="carta">
                <h2>${nombre}</h2>
                <img src="${imagen}"></img>
                <p>Dificultad: ${dificultad}</p>
                <a href="receta.html?id=${id}" class="boton-detalle">Ir al detalle</a>
                </article>`;
                conteiner.innerHTML += cartaHTML
                
        }
            else{
                alert("palabra buscada no tiene referencia")
            }
    }})
        .catch(function(error) {
            console.log("Error: " + error);
      })

