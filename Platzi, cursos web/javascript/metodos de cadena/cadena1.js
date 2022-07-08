let cadena = "cadena de texto pro";
let cadena2= "cadena";
//concatenar concat 

resultado=cadena.concat(" miau");

document.write(`${resultado} <br>`);

//cadena startwith y endswith

resultado1= cadena.startsWith(cadena2);
resultado2= cadena.endsWith(cadena2);
document.write(`${resultado1} <br>`);
document.write(`${resultado2} <br>`);

//cadena include, si una cadena puede encontrarse con otra cadena 

resultado3=cadena.includes(cadena2);
document.write(`${resultado3} <br>`);



//indexof lastindexOf posicion de objeto

resultado4= cadena.indexOf("texto");
document.write(`${resultado4} <br>`);


//llenar cadena padStart y padEnd autorelleno al principio

resultado5= cadena2.padStart(15, "ws");
document.write(`${resultado5} <br>`);

//repeat pues como lo dice el nombre xd

resultado6= cadena2.repeat(3);
document.write(`${resultado6} <br>`);

