

let nombreProducto = "Rosas"
let precioUnitario = 100
let cantidadDeseada = parseInt(prompt("Indicar cantidad deseada"))
do {
    cantidadDeseada = parseInt(prompt("Indicar cantidad deseada"));
} while (isNaN(cantidadDeseada));

function sumarProductos (cantidadDeseada, precioUnitario = 100) {  
    return cantidadDeseada * precioUnitario

}
let total = sumarProductos (cantidadDeseada, precioUnitario)
console.log("Total =" + total)
alert ("Su total es: " + total)
 

