const contenedor = document.querySelector(".flex-conteiner");

function crearLlave (nombre,modelo,precio){
    img = "<img src='llave.png'>";
    nombre = `<h2>Nombre :${nombre}</h2>`;
    modelo = `<h3>Modelo:  ${modelo} </h3>`;
    precio = `<p>Precio: ${precio}</p>`  


  
    return[img ,nombre,modelo,precio];                                                                                      
}             

const changeHidden = (number) =>{
    document.querySelector(".key-data").value=number;
};
let documentFragment = document.createDocumentFragment();
for(var i=0;i<20;i++){




    let modeloRandom = Math.round(Math.random()*100000);
    let precioRandom = Math.round(Math.random()*10+30);
    const llave  = crearLlave(`llave: ${i}`,  modeloRandom,  precioRandom);
  
    let div= document.createElement("DIV");

    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
    div.tabIndex=i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];
    documentFragment.appendChild(div);


}
contenedor.appendChild(documentFragment);




