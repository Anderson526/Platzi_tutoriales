class animal {
    constructor(especie,edad,color){

        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.informacion= `soy ${this.especie} tengo ${this.edad} años y soy de color ${this.color}`
    
    
    
    }
     verInformacion (){
document.write(this.informacion);
    }

    ladrar(){

        if(this.especie=="perro"){
            document.write("wow")
        }else{
            document.write("no puede ladrar");
        }
    }
}

let perro = new animal("perro", 5,"rojo");
let lorito = new animal("loro", 8 , "verde");
let pez = new animal("fluffy", 2, "azul");

// document.write(perro.informacion +"<br>");
// document.write(lorito.informacion +"<br>");
// document.write(pez.informacion +"<br>");

perro.verInformacion();
perro.ladrar();
lorito.ladrar();
