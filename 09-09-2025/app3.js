const frutas = [];

const fruta = prompt("Feria de frutas: Diga que frutas quiere en su carro");

frutas.push(fruta);

while(confirm("Alguna otra fruta?")){
    const fruta = prompt("Alguna otra fruta?");
    frutas.push(fruta);

}

console.log("Estas son sus frutas que agrego");
for (let fruta of frutas){
    console.log(fruta);
    
}
