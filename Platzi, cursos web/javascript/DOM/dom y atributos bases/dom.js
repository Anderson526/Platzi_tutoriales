//seleccion de atributos fuera de javascript

document.getElementById("parrafo"); //implementado solo para ID

document.querySelector(".mau"); //solo un selector que coincida con la clase o con la id
document.querySelectorAll(".mau");//todos los elementos que coincidan con esa clase no el primero 

document.getElementsByTagName("p"); //llamar etiquetas de forma general
document.write(parrafo);

//eliminacion de atributos dentro de javascript

  rangoEtario= document.querySelector(".rangoEtario");
//modificar o cambiar atributos de un objeto

rangoEtario.setAttribute("type","range");


//ontener un atributo

valorDeConstante=rangoEtario.getAttribute("class");

document.write(valorDeConstante);

//remover un atributo


remover= rangoEtario.removeAttribute("type");