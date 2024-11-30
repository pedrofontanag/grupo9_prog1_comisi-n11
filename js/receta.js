
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idreceta = queryStringObj.get('id');

console.log(idreceta);

fetch(`https://dummyjson.com/recipes/${idreceta}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let conteiner = document.querySelector(".detalle-receta")
        console.log(data);
        let nombre = data.name 
        let foto = data.image
        let instrucciones = data.instructions
        let tiempo = data.prepTimeMinutes
        conteiner.innerHTML = `<h1 class='titulo'>${nombre}</h1>
        <img class='foto' src="${foto}"></img>
        <p class='instrucciones'>${instrucciones}</p>
        <p class='tiempo'>Minutos: ${tiempo}</p>`
    })
    .catch(function(error) {
        console.log('El error es: '+ error);
        
        
    })