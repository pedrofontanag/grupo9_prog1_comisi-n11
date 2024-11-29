let urlParams = new URLSearchParams(window.location.search);
let idReceta = urlParams.get("id");  // Captura el parámetro `id` de la query string

if (idReceta) {
    // Realizar el fetch para obtener los detalles de la receta
    fetch(`https://dummyjson.com/recipes/${idReceta}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Mostrar los detalles de la receta
            document.getElementById("nombre-receta").innerText = data.name;
            document.getElementById("imagen-receta").src = data.image;
            document.getElementById("dificultad-receta").innerText = `Dificultad: ${data.difficulty}`;
            document.getElementById("descripcion-receta").innerText = data.description || "Descripción no disponible.";

            // Puedes agregar más detalles según lo que la API devuelva (ingredientes, instrucciones, etc.)
        })
        .catch(function(error) {
            console.log("Error: " + error);
        });
} else {
    console.log("No se proporcionó un id de receta.");
}