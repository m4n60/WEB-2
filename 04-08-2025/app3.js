/*function saludar(nombre){
    console.log("Hola "+nombre);
}

function sumar (n1, n2){
    return parseInt(n1) + parseInt(n2);
}

let num1 = prompt("Numero 1");
let num2= prompt ("Numero 2");

var resul = sumar (num1, num2);
var resul = sumar (2, 17);
var resul = sumar (3, 23);
var resul = sumar (4, 45);
var resul = sumar (5, 54);

console.log("Su total es: "+resul);
*/


function sumar(n1, n2){
    return parseFloat(n1) + parseFloat(n2);
}

function resta(n1, n2){
    return parseFloat(n1) - parseFloat(n2);
}


function multia(n1, n2){
    return parseFloat(n1) * parseFloat(n2);
}

function divi(n1, n2){
    return parseFloat(n1) / parseFloat(n2);

    if (nu2 == 0){
        console.error("No se puede esta divison ");

    }
        
}

let nu1 = prompt("Dame un nunero: ");
let nu2 = prompt("Dame otro: ");

var resul = sumar(nu1, nu2);
console.log("Los resultados son: "+resul);
var resul = resta(nu1, nu2);
console.log("Los resultados son: "+resul);
var resul = multi(nu1, nu2);
console.log("Los resultados son: "+resul);
var resul = divi(nu1, nu2);

console.log("Los resultados son: "+resul);