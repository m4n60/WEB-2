var productos = [
    {nombre: 'camisa', precio: 300},
    {nombre: 'pantalon', precio: 500},
    {nombre: 'zapatos', precio: 400},
    {nombre: 'sombrero', precio: 200}
];

var carrito = [];
var total = 0;
var opcion = 0; 

while (opcion !== productos.length + 1) {
    // Mostrar lista de productos
    var menu = "Selecciona un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Terminar compra";

    // Elige un producto
    opcion = parseInt(prompt(menu));

    if (opcion >= 1 && opcion <= productos.length) {
        var producto = productos[opcion - 1];
        carrito.push(producto);
        total += producto.precio;
        alert(producto.nombre + " agregado al carrito. Total actual: $" + total);
    } else if (opcion !== productos.length + 1) {
        alert("Opción inválida, intenta de nuevo.");
    }
}

// Mostrar lo que se compro 
var resumen = "Tu carrito contiene:\n";
for (var j = 0; j < carrito.length; j++) {
    resumen += "- " + carrito[j].nombre + " $" + carrito[j].precio + "\n";
}
resumen += "Total a pagar: $" + total;

alert(resumen);
