let free = false;
const validarCliente = (tiempo)=>{
    let edad = prompt("digite su edad");
if (edad > 18){

if(tiempo >= 2 && tiempo < 7 && free == false ){
    
alert("pasa wuapo");
    free=true;
}else{
    alert(`puedes pasar son las ${tiempo} pero tienes que pagar`);
}


}else{
    alert("no pasas")
}

}

validarCliente(23);