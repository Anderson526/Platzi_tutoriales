const obtenerInfo =  (materia) =>{

    materias = {
fisica:["pedro","juanito","lucas","pepe","cofla"],
programacion:["pedro","jaunito","lucas","cofla"],
matematicas:["pedro","jaunito","pepe","cofla"],
quimica:["pedro","lucas","pepe","cofla"]
    }

    if(materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    }else{
        return materias;
    }
}



const mostrarInformacion=(materia) =>{
    let informacion = obtenerInfo(materia);

    if(informacion !== false){
        let profesor = obtenerInfo(materia)[0][0];
        let alumnos = obtenerInfo(materia)[0];
        alumnos.shift();
           document.write(`la materia es ${informacion[1]} el profesor es :<b style="color:red" > ${profesor} </b> los alumnos son : ${alumnos} </br>` ) 
        }
        



  }

  const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInfo();
    let clasesPresentes = [];
let cantidadTotal = 0;
for(info in informacion){
    if (informacion[info].includes(alumno)){
cantidadTotal++;
clasesPresentes.push(info + " ");
    }

}
return `${alumno} esta en ${cantidadTotal} clases , esta cursando las clases ${clasesPresentes}`;



  }  

  cantidadDeClases();

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("matematicas");
mostrarInformacion("quimica");
document.write(cantidadDeClases("cofla"));