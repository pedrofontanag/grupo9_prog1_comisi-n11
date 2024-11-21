let form = document.querySelector(".form");
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
