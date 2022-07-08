class animal {
    constructor(especie,edad,color){

        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.informacion= `soy ${this.especie} tengo ${this.edad} años y soy de color ${this.color} y la raza es ${this.raza}`
    
    
    
    }
     verInformacion (){
document.write(this.informacion);
    }

  
}

//todo de la clase animal se va a compartir con la del perro se conoce como herencia

class perro extends animal{

    constructor(especie,edad,color,raza){
        super(especie,edad,color);
            this.raza = null;

    }

    verinfoperro (){
    document.write(this.informacionperro);
    }

     static ladrar(){
    alert("wow");    
    }

    set setRaza(newName){
        this.raza = newName;

    }
    get getRaza(){
        return this.raza;
    }



}

let Perro = new perro("perro", 5,"rojo","cachorrito");
let lorito = new animal("loro", 8 , "verde");
let pez = new animal("fluffy", 2, "azul");


Perro.setRaza= "pastor";

document.write(Perro.getRaza  );
