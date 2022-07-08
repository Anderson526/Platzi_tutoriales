let num = prompt("digite un numero del 1 al 10") ;


if(num >= 1 || num <= 10){

    for( i=0; i<11; i++){
       result= i*num;
       document.write(`${i} x ${num} = ${result} <br>`);
       
     }

       

}

while(num <1 || num > 10){
    alert("no es valido el numero recuerda que es del 1 al 10");
  num = prompt("digite un numero del 1 al 10") ;


}
