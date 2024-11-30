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


