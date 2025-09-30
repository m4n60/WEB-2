//Funcion declarativa
function numAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min)

}
console.log(numAleatorio(1,11));

//Funcion expresada

const miNumero = function numAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min)

}

console.log(miNumero(2,20));

//funcion tradicional

function numero (a){
    return a+100;
}

//1-


  (a) =>{
    return a+100;
}

//2-

(a)=> a+100;

//3-
a => a+100;

//4-
(a,b) => {a+100};
    