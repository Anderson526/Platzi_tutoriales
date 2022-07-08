class Calculadora{
constructor(){
}

sumar(num1,num2){

    return parseInt(num1) + parseInt(num2);
}
restar(num1,num2){

    return parseInt(num1) - parseInt(num2);
}
multiplicar(num1,num2){

    return parseInt(num1) * parseInt(num2);
}
dividir(num1,num2){

    return parseInt(num1) / parseInt(num2);
}
exponencial(num1,exp){
  return   num1**exp;

}
raices(num1){
    return  Math.sqrt(num1);

}
raizCubica(num1){
    return Math.cbrt(num1); 
}

}

const calculadora = new Calculadora();

alert("QUE OPERACION DESEAS REALIZAR");
let operation = prompt("1.suma 2.resta 3.multiplicacion 4.division 5.potencia 6.cuadrada 7.cubica");

if(operation ==1){
    alert("eligio una suma");
    let numero1 = prompt("ingrese el primer valor");
    let numero2 = prompt("ingrese el segundo valor");

    resultado= calculadora.sumar(numero1,numero2);
    alert(`su resultado es ${resultado}`);

}else if( operation==2){

    alert("eligio una resta");
    let numero1 = prompt("ingrese el primer valor");
    let numero2 = prompt("ingrese el segundo valor");

    resultado= calculadora.restar(numero1,numero2);
    alert(`su resultado es ${resultado}`);


}else if( operation==3){

    alert("eligio una multiplicar");
    let numero1 = prompt("ingrese el primer valor");
    let numero2 = prompt("ingrese el segundo valor");

    resultado= calculadora.multiplicar(numero1,numero2);
    alert(`su resultado es ${resultado}`);


}else if( operation==4){

    alert("eligio una dividir");
    let numero1 = prompt("ingrese el primer valor");
    let numero2 = prompt("ingrese el segundo valor");

    resultado= calculadora.dividir(numero1,numero2);
    alert(`su resultado es ${resultado}`);


}else if( operation==5){

    alert("eligio una potenciar");
    let numero1 = prompt("ingrese el primer valor");
    let numero2 = prompt("ingrese el exponente");

    resultado= calculadora.exponencial(numero1,numero2);
    alert(`su resultado es ${resultado}`);


}else if( operation==6){

    alert("eligio una raiz cuadrada");
    let numero1 = prompt("ingrese el primer valor");
    let numero2 = prompt("ingrese el exponente");

    resultado= calculadora.raices(numero1);
    alert(`su resultado es ${resultado}`);


}else if( operation==7){

    alert("eligio una raiz cubica");
    let numero1 = prompt("ingrese el primer valor");
    

    resultado= calculadora.raizCubica(numero1);
    alert(`su resultado es ${resultado}`);


}else{

    alert("ingrese una opcion valida");

    operation=prompt ("ingrese la opcion correcta");
}

