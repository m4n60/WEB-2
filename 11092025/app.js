//arreglo vacio
let nombre= [];

//funcion para agregar un nombre al arreglo
function agregarNombre(){
    let nombre= prompt("Ingresa nombre: ");

    if(nombre){
        nombres.push(nombre);

        alert(`Nombre es ${nombre} agregado exitosamente`);

    }else{
        alert(`El nombre esta vacio.`);
    }


}

function mostrarNombres(){

    if(nombres.lenght === 0){
        alert(`No hay nombres almacenados`);

    }else{
        let mensaje = "Nombres Almacenados:  \n";
        nombres.forEach((nombre, index)=>{
            mensaje += `${index}. ${nombre} \n`;
        });
        alert(mensaje);

    }
}

for(index = 1; index < nombres.length; index ++){
            var mensaje = (index + ". " + nombre + "n");
        }
    alert(mensaje);


function mostarMenu(){
    let option;

    do{
        option=prompt(`
            
            `)
    }while

    
}

