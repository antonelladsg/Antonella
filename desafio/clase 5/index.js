let productos =  ["Jumper","Hoodie","Cardigan","Sweater"]
for(let i=0; i< productos.length ; i++) {
   console.log(productos[i])
}

let productoEliminado = productos.pop();
console.log(productoEliminado + "sin stock.")

for(let i=0; i< productos.length; i++)
console.log("Productos en stock:" + productos[i])

