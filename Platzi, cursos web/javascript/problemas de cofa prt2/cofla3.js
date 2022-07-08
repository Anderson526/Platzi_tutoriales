let materias = {
    fisica:["pedro","juanito","lucas","pepe","cofla"],
    programacion:["pedro","jaunito","lucas","cofla"],
    matematicas:["pedro","jaunito","pepe","cofla"],
    quimica:["pedro","lucas","pepe","cofla"]
        }


        const inscribir=(alumno,materia)=> {

personas = materias[materia];



if (personas.lenght >= 2){

    document.write(`lo sentimos ${alumno} las clases de ${materia} se encuentran llenas`);

}else{
    personas.push(alumno);


    if(materia == "fisica"){
         materias = {
            fisica:personas,
            programacion:[`programacion`],
            matematicas:[`matematicas`],
            quimica:[`quimica`]
      }
    } else if(materia == "programacion"){
        materias = {
           fisica:[`fisica`],
           programacion: personas,
           matematicas:[`matematicas`],
           quimica:[`quimica`]
  } 
}else if(materia == "matematicas"){
    materias = {
       fisica:[`fisica`],
       programacion:[`programacion`],
       matematicas:personas,
       quimica:[`quimica`]
} 
}else if(materia == "quimica"){
    materias = {
       fisica:[`fisica`],
       programacion: [`programacion`],
       matematicas:[`matematicas`],
       quimica:personas
} 
}
document.write(`felicidades ${alumno} te has subscrito a ${materia} correctamente </br>` );
}
}

        inscribir("pepe","quimica");
        inscribir("pepe","quimica");
        inscribir("pepe","quimica");
        inscribir("pepe","quimica");
        inscribir("pepe","quimica");
        inscribir("pepe","quimica");
        inscribir("pepe","quimica");
        inscribir("pepe","quimica");
        inscribir("pepe","quimica");
        inscribir("pepe","quimica");
     