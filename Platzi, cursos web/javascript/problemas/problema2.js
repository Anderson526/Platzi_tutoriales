let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

for(i=0; i< cantidad; i++){

    alumnosTotales[i]= [prompt("nombre del alumno " + (i+1)) ,0 ];
}


const tomarAsistencia = (nombre, p) =>{

    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){

        alumnosTotales[p][1]++;
    }



}
for (i = 0; i< 5 ; i++){
    for(let alumno in alumnosTotales){

        tomarAsistencia(alumnosTotales[alumno][0], alumno);

    }
}


for(alumno in alumnosTotales){

    let resultado = `${alumnosTotales[alumno][0]} :<br>
    _______________Asistencias: ${alumnosTotales[alumno][1]} <br>
    _______________Ausencias: ${30-  alumnosTotales[alumno][1]}
    `;

    if(30- alumnosTotales[alumnos][1] > 18){

        resultado+= " <b style = `color:red`>REPROBADO </b>";
    }else{
        resultado+= "<br><br>";
    }

    document.write(resultado);
}
 
   
