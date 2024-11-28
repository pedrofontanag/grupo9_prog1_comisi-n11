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

let form2 = document.querySelector(".form2");
let emailInput = document.querySelector(".email");
let passwordInput = document.querySelector(".contra");
let emailError = document.querySelector(".email-error");
let passwordError = document.querySelector(".password-error");
let termsCheckbox = document.querySelector(".terms");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valida = true;

    if (emailInput.value == "") {
        emailError.style.display = "block";
        emailError.innerText = "Por favor complete el campo email";
        valida = false;
    }

    if (passwordInput.value == "") {
        passwordError.style.display = "block";
        passwordError.innerText = "Por favor complete el campo contraseña";
        valida = false;
    }
    
    if (!termsCheckbox.checked) {
        alert("Debe aceptar los términos y condiciones para registrarse.");
        valida = false;
    }

    if (valida) {
        window.location.href = "login.html";
    }
});
