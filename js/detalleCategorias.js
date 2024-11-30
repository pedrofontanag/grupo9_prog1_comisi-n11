let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idcategoria = queryStringObj.get('id');

console.log(idcategoria);