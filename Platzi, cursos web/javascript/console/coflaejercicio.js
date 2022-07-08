const materias ={
fisica: [90,6,4,"fisica"],
matematicas: [90,6,4,"matematicas"],
quimica: [91,6,4,"quimica"],
algebra: [92,6,2,"algebra"],
fisica: [54,6,4,"fisica2"],
dibujo: [23,4,1,"dibujo"],
logica:[51,5,2,"logica"]
}
const asistencia= ()=>{
    for(materia in materias){
  let asistencias = materias[materia][2];
  let promedio = materias[materia][0];
  let trabajos = materias[materia][1];

  console.log(`${materias[materia][3]}:`)


        if(asistencias >=3){
           
            console.log("%cAsistencias en orden", "color:green");
        }else{
            console.log("%cFaltaste como toda la seman capo", "color:red");
        }

        if(promedio>= 53){
            console.log("%cPromedio pro en orden", "color:green");
        }else{
            console.log("%cNo estudiaste", "color:red");
    
        }
    
        if(trabajos>= 2){
            console.log("%cTrabajos entregados" + `${materias[materia][1] }`, "color:green");
        }else{
            console.log("%cNo entregaste completo" + `${materias[materia][1] }`, "color:red");
    
        }
    }

   


}

asistencia();