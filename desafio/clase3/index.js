let nombreProducto = "Hoodie";
let precioUnitario = "20.000";
let cantidadDeseada = prompt ("Cantidad deseada de Hoodies a 20.000$")
let costoTotal = precioUnitario + cantidadDeseada

if (cantidadDeseada >= 5 )
{
    costoTotal = costoTotal * 0,9 
}

alert ("Su total es: +" + costoTotal)

