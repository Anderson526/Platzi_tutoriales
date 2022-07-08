const contenedor = document.querySelector(".contenedor");
//TODO EN MAYUSCULA PARA CREAR EL ELEMENTO
//appendChild es un elemento el cual nos permite agregar un hijo a la clase padre

// let variable =document.createTextNode("este es un item  de la linea");

//para no usar tantos recursos
const fragmento = document.createDocumentFragment();


for(i=0;i<20;i++){
    const item = document.createElement("LI");
     
    item.innerHTML= "este es un elemento de lista";

    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);





