const contenedor = document.querySelector(".contenedor");

//primer hijo
primerHijo = contenedor.firstChild;
//ultimo hijo
ultimoHijo = contenedor.lastChild;

console.log(primerHijo + ultimoHijo);

//lista de nodos html

listaDeNodos = contenedor.childNodes;
console.log(listaDeNodos);

//childrensolo las etiquetas

children= contenedor.children;

for( hijo in children){

    console.log(hijo);
}

