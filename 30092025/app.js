//Inicamos con un arreglo para almacenar tareas
let tareas = [];

// funcion para mostrar el menu de opciones
function mostrarMenu(){
    return parseInt( prompt(`
        Opciones Disponibles:
        1.- Agregar tarea.
        2.-Ver todas las tareas.
        3.-Marcar tarea como completada.
        4.- Eliminar tarea
        4.-Salir.
        "Elige una opcion"
        `));
}

//Funcion para agregar tarea 
function agregarTarea(){
    let nombre = prompt("Introduce  el nombre de la tarea");
    if(nombre){
        //agregar una tarea
        let tarea = {
            nombre: nombre,
            completado: false 
        };

        tareas.push(tarea);
        alert("¡La tarea se agrego de manera exitosa!")

    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

//Funcion para ver todas las tareas
function verTareas(){
    if( tareas.length === 0){
        alert("No hay tareas en la lista");
    }else{
        let mensaje = "Lista de tareas \n";
        tareas.forEach((tarea,index)=>{
            mensaje+=`${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" :"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

//Funcion para marcar la tarea como completada MANGO PROPUESTA
/*function marcarTarea(){
    if(tareas.length === 0){
        alert("No hay tareas para marcar");
    } else {
        let indice = parseInt(prompt("Introduce el número de la tarea que deseas marcar como completada:"));

        // el número es correcto
        if(indice >= 1 && indice <= tareas.length){
            tareas[indice - 1].completado = true;
            alert(La tarea "${tareas[indice - 1].nombre}" fue marcada como completada);
        } else {
            alert("Número de tarea no es valido");
        }
    }
}
*/

//Marcar tarea como completada
function marcarTareaCompletada( ){
    let numero = parseInt(prompt( "Introduce el numero de la tarea que se desea marcar como completada"));
    if( numero > 0 && numero <= tareas.length ){

        tareas[numero - 1].completado=true;
        alert(`La tarea "${tareas[numero-1].nombre}" ha sido marcada como copletada.`);
    }else{
        alert("Numero de tarea invalido");
    }
}   


// Función para eliminar tarea
function eliminarTarea(){
    if(tareas.length === 0){
        alert("No se puede eliminar si no hay tareas");
        return;
    }

    let numero = parseInt(prompt("Introduce el número de la tarea que deseas eliminar"));
    if(numero > 0 && numero <= tareas.length){
        let tareaEliminada = tareas.splice(numero - 1, 1);
        alert(`La tarea "${tareaEliminada[0].nombre}" ha sido eliminada.`);
    } else {
        alert("Número de tarea no reconocido ");
    }
}

// funcion para manejar el flujo de nuestro programa
function iniciarPrograma(){
    let continuar = true;

    while(continuar){
            let opcion= mostrarMenu();

            switch(opcion){
                case 1: 
                    agregarTarea();
                    break;
                case 2:
                    verTareas();
                    break;
                case 3:
                    marcarTareaCompletada();
                    break;
                case 4:
                    alert("Saliendo del programa");
                    continuar = false;
                    break
                default:
                    alert("Opcion no valida. Intenta de nuevo");
            }
    }
    alert("Programa finalizado")


}

//Iniciar programa
iniciarPrograma();