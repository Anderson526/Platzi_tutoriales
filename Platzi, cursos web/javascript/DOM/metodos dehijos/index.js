const contenedor = document.querySelector(".contenedor");


const parrafo = document.createElement("P");
const h2 =document.createElement("H2");
h2.innerHTML = "titulo";

h2_antiguo = document.querySelector(".h2");
contenedor.replaceChild(h2,h2_antiguo);

//removechild remueve a todoslos hijos existentes

let respuesta = contenedor.hasChildNodes();

if(respuesta){

    console.log("si ahy mas hijos");
}else{
 
    console.log("no hay mas hijos");
}


// parentNode y parentElement son para buscar el padre de cada clase sin embargo 
// la diferencia que hay en estos dos es que el parentElement no ayuda a ver el padre fuera 
// de las etiquetas html y el parentNode unicamente vera las etiquetas de html