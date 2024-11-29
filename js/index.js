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


fetch('https://dummyjson.com/recipes')
    .then(function(response) {
        return response.json()
  })

    .then(function(data) {
        let conteiner = document.querySelector(".recetas-apis");
        for (let i = 0; i < 10; i++) {
            const element = data.recipes[i];
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
        let contenedor = document.querySelector(".masRecetas")
        for (let i = 10; i < 20; i++) {
            const element = data.recipes[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;

            contenedor.innerHTML += `<article class="carta">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            
            </article>`;
            
        }})

  
    .catch(function(error) {
        console.log("Error: " + error);
  })



let boton = document.querySelector(".boton-cargar-mas")
let contenedor = document.querySelector(".masRecetas")
boton.addEventListener('click',function() {
    contenedor.style.display = 'flex'
    boton.style.display = 'none'
});

let boton_detalle = document.querySelector("detalle")
console.log(boton_detalle);


