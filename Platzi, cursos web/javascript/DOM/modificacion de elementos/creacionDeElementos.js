const titulo = document.querySelector(".title");


//devuelve contenido de texto de la clase sin importar que no se muestre dentro 

resultado = titulo.textContent; 

document.write(resultado);

// //inner devuelve el texto visible en el node element
// //no se usa mas
// resultado = titulo.innerText; 

// document.write(resultado);


//muestra todo el codigo desde el html
resultado = titulo.innerHTML; 

alert(resultado);

//muestra todo el resultado del html, con clases y todo 

resultado = titulo.outerHTML; 

alert(resultado);