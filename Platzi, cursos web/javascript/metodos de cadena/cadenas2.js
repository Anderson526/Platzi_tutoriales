//crea un arreglo y lo separa por este mismo
let cadena= "miau miau miau";
resultado = cadena.split(" ");
document.write(resultado[2]);

//substring crear un nuevo string


resultado1= cadena.substring(0,3);
document.write(`</br>${resultado1}`);


//lowercase y uppercase , mayusculas y minusculas


resultado2 = cadena.toUpperCase();
resultado3 = cadena.toLowerCase();


document.write(`</br>${resultado2}`);
document.write(`</br>${resultado3}`);

//convertir a string un numero

numero = 123;
numeroString = numero.toString();
document.write(`</br>${numeroString} </br>`);

//trim borra los espacion  - trimstart o trimend

// let espacios= "   pedros   ";
// resultado4= espacios.trim();
// document.write(resultado4.lenght);





//pop elimina ultimo elemento de un arreglo


arreglo= ["pepe","monica","lucia"];



document.write(`
arreglo sin modificar: ${arreglo}</br>

`);
resultado5= arreglo.pop();

document.write(`elemento removido: ${resultado5}</br>`)


document.write(`
resultado: <b style= "color:red" > ${arreglo} </b></br>`);


resultado6= arreglo.push("pancho");

document.write(`
añadido: <b style= "color:purple" > ${resultado6} </b></br>`);

document.write(`
añadido resultado: <b style= "color:purple" > ${arreglo} </b></br>`);



