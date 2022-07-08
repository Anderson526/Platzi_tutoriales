let trabajo= "240 min ";
let estudio= "100 min";
let tp="100 min";
let homework="30 min";
let descanso ="10 min";


console.log("TAREAS");
for( i=0; i< 14 ; i++){
if(i == 0 ){

    console.group("semana1");
}
   
    console.groupCollapsed("dia " + (i+1));

    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
if(i==7){
    
        console.groupEnd();
        console.group("semana2");
    
    
}
}

console.groupEnd();