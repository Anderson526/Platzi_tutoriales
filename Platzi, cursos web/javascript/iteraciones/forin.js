// let animales = ["gato","perro","tiranosaurios" ];
// animales.tamaño = "grande";

// for( animal in animales){

//   document.write(animal + "<br>" );  
// }
// for (animal of animales){
//     document.write(animal + "<br>")
// }



array1 = ["pepe", "jose", "uva"];
array2 = ["maria",array1];

for(let array in array2 ){
    if(array == 1){
        for(let array of array1){
            document.write(array + "<br>");
        }
    }else{
        document.write(array2[array] + "<br>");
    }
}

