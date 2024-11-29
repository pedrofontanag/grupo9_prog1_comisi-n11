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
    .then(function(data){
        let italian = []
        let asian = []
        let american = []
        let mexican = []
        let Mediterranean = []
        let Pakistani = []
        let Japanese = []
        let Moroccan = []
        let Korean = []
        let Greek = []
        let Thai = []
        let Turkish = []
        let Russian = []
        let Indian = []
        let Lebanese = []
        let Brazilian = []
        for (let i = 0; i < data.recipes.length; i++) {
            const element = data.recipes[i];
            if (element.cuisine == "Italian"){
                italian.push(element)
            }
            if (element.cuisine == "Asian"){
                asian.push(element)
            }
            if (element.cuisine == "American"){
                american.push(element)
            }
            if (element.cuisine == "Mexican"){
                mexican.push(element)
            }
            if (element.cuisine == "Mediterranean"){
                Mediterranean.push(element)
            }
            if (element.cuisine == "Pakistani"){
                Pakistani.push(element)
            }
            if (element.cuisine == "Japanese"){
                Japanese.push(element)
            }
            if (element.cuisine == "Moroccan"){
                Moroccan.push(element)
            }
            if (element.cuisine == "Korean"){
                Korean.push(element)
            }
            if (element.cuisine == "Greek"){
                Greek.push(element)
            }
            if (element.cuisine == "Thai"){
                Thai.push(element)
            }
            if (element.cuisine == "Turkish"){
                Turkish.push(element)
            }
            if (element.cuisine == "Russian"){
                Russian.push(element)
            }
            if (element.cuisine == "Indian"){
                Indian.push(element)
            }
            if (element.cuisine == "Lebanese"){
                Lebanese.push(element)
            }
            if (element.cuisine == "Brazilian"){
                Brazilian.push(element)
            }

        }
        let conteiner_italian = document.querySelector(".italian")
        for (let i = 0; i < italian.length; i++) {
            const element = italian[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_italian.innerHTML += `<article class="carta  categoria-italia" style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_asian = document.querySelector(".asian")
        for (let i = 0; i < asian.length; i++) {
            const element = asian[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_asian.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_american = document.querySelector(".american")
        for (let i = 0; i < american.length; i++) {
            const element = american[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_american.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_mexican = document.querySelector(".mexican")
        for (let i = 0; i < mexican.length; i++) {
            const element = mexican[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_mexican.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_mediterranean = document.querySelector(".mediterranean")
        for (let i = 0; i < Mediterranean.length; i++) {
            const element = Mediterranean[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_mediterranean.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_pakistani = document.querySelector(".pakistani")
        for (let i = 0; i < Pakistani.length; i++) {
            const element = Pakistani[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_pakistani.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_japanese = document.querySelector(".japanese")
        for (let i = 0; i < Japanese.length; i++) {
            const element = Japanese[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_japanese.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_moroccan = document.querySelector(".moroccan")
        for (let i = 0; i < Moroccan.length; i++) {
            const element = Moroccan[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_moroccan.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_korean = document.querySelector(".korean")
        for (let i = 0; i < Korean.length; i++) {
            const element = Korean[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_korean.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_greek= document.querySelector(".greek")
        for (let i = 0; i < Greek.length; i++) {
            const element = Greek[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_greek.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_thai = document.querySelector(".thai")
        for (let i = 0; i < Thai.length; i++) {
            const element = Thai[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_thai.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_turkish = document.querySelector(".turkish")
        for (let i = 0; i < Turkish.length; i++) {
            const element = Turkish[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_turkish.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_russian = document.querySelector(".russian")
        for (let i = 0; i < Russian.length; i++) {
            const element = Russian[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_russian.innerHTML += `<article class="carta categoria "  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_indian = document.querySelector(".indian")
        for (let i = 0; i < Indian.length; i++) {
            const element = Indian[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_indian.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_lebanese = document.querySelector(".lebanese")
        for (let i = 0; i < Lebanese.length; i++) {
            const element = Lebanese[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_lebanese.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
        let conteiner_brazilian = document.querySelector(".brazilian")
        for (let i = 0; i < Brazilian.length; i++) {
            const element = Brazilian[i];
            let nombre = element.name;
            let dificultad = element.difficulty; 
            let imagen = element.image;
            conteiner_brazilian.innerHTML += `<article class="carta categoria"  style="display: none;">
            <h2>${nombre}</h2>
            <img src="${imagen}"></img>
            <p>Dificultad: ${dificultad}</p>
            </article>`;
        }
    })

    .catch(function(error) {
        console.log("Error: " + error);
  })

  //let sections = document.querySelectorAll(".conteiner");
  //for (let i = 0; i < sections.length; i++) {
   // console.log(sections[i].classList[1]);
   // console.log(sections[i]);
    
   //   sections[i].addEventListener("click", function () {
    //      let category = sections[i].classList[1];
    //      window.location.href = `./category.html?category=${category}`;
    //  });
 // }

 let nombre = document.querySelector(".nombreCat");
 let categoria = document.querySelector(".categoria-italia")
 console.log(nombre, categoria);
 
 
 nombre.addEventListener("click",function (){
    if (categoria.style.display == "none"){
        categoria.style.display = "flex"
    }

 });
  