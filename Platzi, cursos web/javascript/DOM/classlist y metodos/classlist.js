const titulo = document.querySelector(".titulo");


titulo.classList.add("nya"); //agregar una nueva clase
titulo.classList.remove("nya");//remover clases ya existentes


titulo.classList.add("grande");
let valor = titulo.classList.item("1");// posiciion de la clase
let valor1 = titulo.classList.contains("grande");//revisa si la clase especifica existe


titulo.classList.toggle("rojo");//si tiene la clase la borra , si no la tiene la añade
titulo.classList.toggle("grande",true) ;//solo la deja o la añade
titulo.classList.toggle("grande", false); //si la ve solo la elimina

titulo.classList.replace("miau", "guau" );//cambiar clases


document.write(valor);
document.write(valor1);




