//se reversa los arreglos

let numeros = [ 3,2,5,6,2,1,2,3];

let resultado = numeros.reverse();

document.write(numeros);
document.write("</br>")
//unshift agregar elementos al inicio

numeros.unshift(0,2,"hola");
document.write(numeros);
document.write("</br>")

//sort o ordenar arreglos
numeros.sort();
document.write(numeros);
document.write("</br>")

//splice se usa para borrar o remplazar elementos desde un inicio hasata un final 

numeros.splice(0,3,"jaunito");
numeros.splice(-1,0,"pepito");
document.write(numeros);
document.write("</br>")

