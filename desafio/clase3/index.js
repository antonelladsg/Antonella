let nombreProducto = "Hoodie";
let precioUnitario = 20000; 
let cantidadDeseada = prompt("Cantidad deseada de Hoodies a $20.000");

cantidadDeseada = parseInt(cantidadDeseada);

let costoTotal = precioUnitario * cantidadDeseada;

if (cantidadDeseada >= 5) {
    costoTotal = costoTotal * 0.9;
}

alert("Su total es: $" + costoTotal);

