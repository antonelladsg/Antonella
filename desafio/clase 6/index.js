let producto = {
    nombre: "Camiseta",  // Inicial
    precio: 500,
    cantidadDisponible: 20
};
producto.nombre = "Zapatillas";

producto.categoria = "calzado";  

delete producto.cantidadDisponible;

console.log(producto);

 if (!producto.cantidadDisponible) {
            console.log("Producto agotado");
        }