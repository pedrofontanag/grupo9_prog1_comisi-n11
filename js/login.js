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
let form2 = document.querySelector(".contact-form")
let errorEmail = document.querySelector(".mail");
let email = document.querySelector(".email");
let password = document.querySelector(".contra");
let errrorPassword = document.querySelector(".password")
form2.addEventListener("submit", function(e) {
    let valida = true;
    e.preventDefault();
    if ( email.value == ""){
      errorEmail.style.display="block"
      errorEmail.innerText="Por favor complete el campo email"
      valida = false
    }
    if ( password.value == ""){
        errorPassword.style.display="block"
        errorPassword.innerText="Por favor complete el campo contraseña"
        valida = false
    }
    if (valida) {
        form2.submit();
    }})