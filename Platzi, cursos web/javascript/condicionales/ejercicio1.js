dinero1=prompt("inserte el monto de pepe");
dinero2=prompt("inserte el monto de sofi");
dinero3=prompt("inserte el monto de lucia");


dinero1=parseInt(dinero1);
dinero2=parseInt(dinero2);
dinero3=parseInt(dinero3);

if(dinero1>=0.2 && dinero1<1){

alert("comprate un buen heladito");
}else if(dinero1>=1 && dinero1<2){
    alert("para emocion compra una casa");
    alert("dinero sobrante" + (dinero1-0.2))
}else{
    alert("pobre de mierda");
}



if(dinero2>=0.2 && dinero2<1){

    alert("comprate un buen heladito");
    }else if(dinero2>=1 && dinero2<2){
        alert("para emocion compra una casa");
        alert("dinero sobrante" + (dinero2-0.2))
    }else{
        alert("pobre de mierda");
    }


    if(dinero3>=0.2 && dinero3<1){

        alert("comprate un buen heladito");
        }else if(dinero3>=1 && dinero3<2){
            alert("para emocion compra una casa");
            alert("dinero sobrante" + (dinero2-0.2))
        }else{
            alert("pobre de mierda");
        }