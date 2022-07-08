let titulo = document.querySelector(".title");

//modificar cualquier mavor en directo
titulo.setAttribute("contentEditable", "true");

//ltr rtl - left to right o al reves para usarlo en texto o en objetos
titulo.setAttribute("dir","ltr")

//hidden

let oculto = document.querySelector(".parrafo");
oculto.removeAttribute("hidden");

//tabindex funciona para enumerar el orden de los elementos con tab 
oculto.setAttribute("tabindex",1);

//cambio de titulos o seleccion

titulos= document.querySelector(".titulosNormales");
titulos.setAttribute("title", "jajajja se mamo");