const frutas = ["mango"];

frutas.push("uva");     //final
frutas.unshift("bananas");   //inicio
frutas.push("pera");  //final
frutas.unshift("sandia"); //inicio

console.log(frutas);

//completo

for(let fruta of frutas){
    console.log(fruta);
    
}


//eliminar
console.log("---------------------------------------");
frutas.pop(); //eliminar el del final

for(let fruta of frutas){
    console.log(fruta);
    
}

console.log("--------------------------------------");
frutas.shift();  //eliminar el del principio

for(let fruta of frutas) {
    console.log(fruta);
    
}

/*
//MAL
const puerto=3306
puerto= 3308;
console.log(puerto);

*/
