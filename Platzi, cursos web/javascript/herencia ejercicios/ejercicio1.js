class celulares{
constructor(color,peso,rdp,rdc,ram){
    this.color=color;
    this.peso=peso;
    this.rdp=rdp;
    this.rdc=rdc;
    this.ram=ram;
    this.encendido= false;
}



prender(){
if(this.encendido==false){
    alert("telefono esta prendido");
    this.encendido =true;
}else{
    alert("telefono esta apagado");
}
}


reiniciar(){
    if(this.encendido==false){
        alert("telefono esta reiniciando");
        this.encendido =true;
    }else{
        alert("telefono esta apagado");
    }
}


tomarfoto(){

    alert(`la foto se tomo con una resolucion de ${this.rdc}`);
}

tomarvideo(){

    alert(`el video se tomo con una resolucion de ${this.rdc}`);
}

mostararinfo(){

document.write( `

color: <b>${this.color}</b></br>
tamaño: <b>${this.rdp}</b></br>
peso: <b> ${this.peso}</b></br>
resolucion de camara: <b>${this.rdc}</b></br>
resolucion de video: <b>${this.rdc}</b></br>
memoria ram: <b>${this.ram}</b></br>
`);

}
}






class celularAltaGama extends celulares{
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.resolucionDeCamaraExtra=rdce;
    }     



infoAltaGama(){
    return  this.mostararinfo() + document.write(`Resolucion camara tracera: ${this.resolucionDeCamaraExtra} <br><br>`);
}

}






const cel1 = new celularAltaGama("rojo","2kg","3pulgadas","fullhd","7gb","hd");
const cel2 = new celularAltaGama("negro","2kg","4pulgadas","720hd","3gb","mega hd");
const cel3 = new celulares("rojo","4kg","3pulgadas","480p","1gb");

cel1.infoAltaGama();
cel2.infoAltaGama();



// cel1.prender();
// cel1.reiniciar();
// cel1.tomarvideo();
// cel1.tomarfoto();

