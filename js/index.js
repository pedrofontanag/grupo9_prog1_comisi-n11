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