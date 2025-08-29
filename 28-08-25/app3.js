/* //IF
 if (condicion => false){
       //algo

}else{
    //algo
 }
    */

 /*
let clave = prompt("Ingresa la clave secreta");
if (clave === "123456" ){
    //clave => true
    console.log("Exito");
}
console.log("Continua el flujo");
*/

/*
let clave = prompt("Ingresa un numero: ");
if (clave >= 10){
    console.log("perron")

}else{
    console.log("Prueba de nuevo");
}
*/

/*
let port = 3008;

if(port){
    console.log("Definicion de puerto correcto");
}else{
    console.error("Error en puerto");
}*/

let num1 = parseFloat(prompt("Dame un numero: "));
let num2 = parseFloat(prompt("Dame otro numero: "));
let num3 = parseFloat(prompt("Dame un ultimo numero: "));

if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales " );
} else {
    let mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }

    let menor = num1;
    if (num2 < menor) {
        menor = num2;
    }
    if (num3 < menor) {
        menor = num3;
    }

    console.log("El número mayor es: " + mayor);
    console.log("El número menor es: " + menor);

    if (num1 === num2) {
        console.log("El primer y segundo número son iguales.");
    }
    if (num1 === num3) {
        console.log("El primer y tercer número son iguales.");
    }
    if (num2 === num3) {
        console.log("El segundo y tercer número son iguales.");
    }
}




