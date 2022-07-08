class App {

    constructor(descargas,puntuacion,peso){
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciar=true;
        this.instalada=false;

    }

    appAbrir(){
            if(this.iniciar == false && this.instalada == false){
                alert("la aplicacion esta abierta");
                this.iniciar = true
            }else if(this.iniciar == true && this.instalada == false){

                alert("la aplicacion esta cerrada");
            }
    }


    appInstalada(){

        if(this.instalada == false){
            alert("la aplicacion esta instalada");
            
        }else{

            alert("la aplicacion no existe");
        }
    }



    appDesinstalar(){

        if(this.instalada == true){
            alert("aplicacion desinstalada con exito");
        }
    }

    appinfo(){
        document.write(`
        
        numero de descargas: ${this.descargas} </br>
        puntacion: ${this.puntuacion} </br>
        peso: ${this.peso} </br>
        `);
    }




} 

app = new App (12312,3,"400mb");
app.appInstalada();
app.appAbrir()
app.appinfo();