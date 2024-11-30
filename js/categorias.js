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

fetch('https://dummyjson.com/recipes/tags')
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);
        
        let contenedor = document.querySelector(".categorias")
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            let id = element
            contenedor.innerHTML += `
            <a href="detallecategorias.html?id=${id}" class="boton-detalle">${element}</a>`
            console.log(id);
            
        }})
    .catch(function(error) {
        console.log('El error es: '+ error);
    })  


