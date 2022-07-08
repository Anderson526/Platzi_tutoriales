const input = document.querySelector(".input-normal");


document.write(input.className + "</br>") ; //mostrar el nombre de la clase
document.write(input.value + "</br>") ; //mostrar el valor del input

//modificar atributos desde el objeto como propiedad
document.write(input.type = "text" + "</br>");


const file = document.querySelector(".file");

//verificar un archivo que se vaya a subir

file.accept = "image/*";

let texto =  document.querySelector(".text");
texto.minLength = 3;

texto.placeholder ="miau";
const css = document.querySelector(".css");

//todas las propiedades de css van con Camel case
css.style.color = "red";


