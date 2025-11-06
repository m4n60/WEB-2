const os = required(`node:es`);

console.log("Informacion de mi sistema");
console.log("---------------------------")
console.log("Nombre de sistema: ",os.plataform());
console.log("Version del sistema: ",os.realse());
console.log("Arquitectura ",os.cpu());