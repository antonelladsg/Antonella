const productos = ["Hoodie", "Zapatillas", "Camiseta", "Gorra", "Pantalón"];

for (const producto of productos) {
    const h2 = document.createElement("h2");
    h2.innerHTML = producto;
    document.body.appendChild(h2);
}