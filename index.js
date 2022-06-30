let segundos = 10;
let minutos = 1;

function cronometro(){
   if(minutos == 0 && segundos == 0){
       console.log("Termino");
       clearInterval(id);

   }else if(segundos == 0 && minutos != 0){
       minutos--;
       segundos = 10;
       console.log("minutos "+ minutos+" segundos"+ segundos);

   }else{
       segundos--;
       console.log("minutos "+ minutos+" segundos"+ segundos);

   }
}

var id = setInterval('cronometro()', 1000);

// function detenerCronometro(){
//     if(minutos == 0 && segundos == 0){

//         clearInterval(id);
//     }

// } 
