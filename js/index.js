let form = document.querySelector(".form");
let input = document.querySelector(".input")
let invalid = document.querySelector(".invalid")
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let valida = true;
    if (input.value == ""){
        invalid.style.display = "block"
        invalid.innerText = "El campo esta vacio"
        valida = false
    }
    if (input.value.length < 3){
        invalid.style.display = "block"
        invalid.innerText = "Tiene que ser mayor a 3 carecteres"
        valida = false
    }
    if (valida){
        form.submit()
    }
})

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
            conteiner.innerHTML += `<article class="carta">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            <button class="ver-mas" data-id="${id}">Ver más</button> 
            </article>`;
        }

        let botones = document.querySelectorAll(".ver-mas");
        botones.forEach(function(boton) {
            boton.addEventListener("click", function() {
                let recetaId = this.getAttribute("data-id");
                window.location.href = `receta.html?id=${recetaId}`;
            });
        });

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
            <button class="ver-mas" data-id="${id}">Ver más</button>
            </article>`;
            
        }})

  
    .catch(function(error) {
        console.log("Error: " + error);
  })

  let botonesVerMas = document.querySelectorAll(".ver-mas");

botonesVerMas.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const recetaId = boton.getAttribute("data-id");
        window.location.href = `receta.html?id=${recetaId}`;
    });
});

let boton = document.querySelector(".boton-cargar-mas")
let contenedor = document.querySelector(".masRecetas")
boton.addEventListener('click',function() {
    contenedor.style.display = 'flex'
    boton.style.display = 'none'
});

