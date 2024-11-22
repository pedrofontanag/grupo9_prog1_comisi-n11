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
        for (let i = 0; i < 10; i++) {
            const element = data.recipes[i];
            console.log(element);
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            document.querySelector(".name").innerHTML = nombre;
            document.querySelector(".dif").innerText = dificultad;
            document.querySelector(".img").innerHTML = imagen    
        };
       
    })
  
    .catch(function(error) {
        console.log("Error: " + error);
  })
  


