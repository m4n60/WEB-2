let inventario =[];
function mostrarMenu(){
    return parseInt(prompt(
        `Opciones disponibles
        1.- Agregar producto
        2.- Mostrar todo los productos
        3.-Buscar producto por nombre
        4.-Salir
        Elige una opcion: `
    ));
}

function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto");
    let cantidad = parseInt(prompt("Ingresa la cantidad del producto"));
    let precio = parseInt(prompt("Ingresa el precio del producto"));

    if (cantidad > 0 && precio > 0) {
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };

        inventario

    } else {
        
    }

}

function mostrarProducto(){
    if (inventario.length ==0) {
        alert ("Inventario vacio")
    } else {
        let mensaje = "Producto del inventario \n";
        for (i = 0; i < inventario.length; i++){
            mensaje = `Producto:  ${(i+1)}\n` + 
            `Nombre: ${(inventario[i].nombre)}\n ` +
            `Precio: ${(inventario[i].precio)}\n` +
            `Cantidad: ${(invetario[i].cantidad)}\n`+
            "-----------------------------------------"
    
    }    }
}

function buscarProducto(){
    if (inventario.length == 0) {
        alert ("Inventario vacio")
    } else {
        let buscar = prompt("Nombre del producto que se desea buscar");
        for(i == 0; inventario[1] == buscar; i++){
            buscar.push(invetario(1));
            alert(buscar);
        }
    }
}

function mostrarProductos(){
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}

iniciarprograma();

//Terminar esta parte 