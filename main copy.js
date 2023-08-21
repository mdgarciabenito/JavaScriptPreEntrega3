console.log ("*------------------------------------------------------------------------------*");

console.log ("Constructor de Productos");

class Producto {
    constructor (nombre, tipo, cualidad, precio){
        this.nombre = nombre;
        this.tipo = tipo;
        this.cualidad = cualidad;
        this.precio = parseFloat (precio)
    }
}

const tazaCeramicaA = new Producto ("Taza Cerámica A", "taza", "cerámica", 15);
const tazaMagicaA = new Producto ("Taza Mágica A", "taza", "mágica", 25);
const tazaPlasticaA = new Producto ("Taza Plástica A", "taza", "plástica", 15);
const tazaCeramicaB = new Producto ("Taza Cerámica B", "taza", "cerámica", 15);
const tazaMagicaB = new Producto ("Taza Mágica B", "taza", "mágica", 25);
const tazaPlasticaB = new Producto ("Taza Plástica B", "taza", "plástica", 15);

console.log ("*------------------------------------------------------------------------------*");

//Array

console.log ("Array de Tazas");

const tazas = [
    new Producto ("Taza Cerámica A", "taza", "cerámica", 15),
    new Producto ("Taza Mágica A", "taza", "mágica", 25),
    new Producto ("Taza Plástica A", "taza", "plástica", 15),
    new Producto ("Taza Cerámica B", "taza", "cerámica", 15),
    new Producto ("Taza Mágica B", "taza", "mágica", 25),
    new Producto ("Taza Plástica B", "taza", "plástica", 15)
]

console.log ("*------------------------------------------------------------------------------*");


//Crear nuevo Array sumando IVA a los precios

console.log ("Array de Tazas con IVA");

const tazasIVA = tazas.map (item => (
    {nombre: item.nombre, tipo: item.tipo, cualidad: item.cualidad, precio: item.precio*1.21}
))
console.log (tazasIVA)

console.log ("*------------------------------------------------------------------------------*");

console.log ("Cada Objeto del Array tazasIVA");

/*tazas.forEach(function(taza){
    console.log (taza)
})*/

tazasIVA.forEach ((taza) => console.log (taza));

console.log ("*------------------------------------------------------------------------------*");


//Agregar Productos a un Array carrito

const carrito = []

let elegirProducto = prompt ("Elija un producto ingresando un número: Taza Cerámica A = 1 / Taza Mágica A = 2 /  Taza Plástica A = 3 /  Taza Cerámica B = 4 / Taza Mágica B = 5 / Taza Plástica B = 6");

    if (elegirProducto == "1"){
        alert ("Seleccionaste Taza Cerámica A. Es una " + tazaCeramicaA.tipo + " de " + tazaCeramicaA.cualidad + " y el precio es de " + tazaCeramicaA.precio + ". Se agregará al carrito");
        carrito.push (tazaCeramicaA);
    }
    else if (elegirProducto == "2"){
        alert ("Seleccionaste Taza Mágica A. Es una " + tazaMagicaA.tipo + " de " + tazaMagicaA.cualidad + " y el precio es de " + tazaMagicaA.precio);
        carrito.push (tazaMagicaA);
    }
    else if (elegirProducto == "3"){
        alert ("Seleccionaste Taza Plástica A. Es una " + tazaPlasticaA.tipo + " de " + tazaPlasticaA.cualidad + " y el precio es de " + tazaPlasticaA.precio);
        carrito.push (tazaPlasticaA);
    }
    else if (elegirProducto == "4"){
        alert ("Seleccionaste Taza Cerámica B. Es una " + tazaCeramicaB.tipo + " de " + tazaCeramicaB.cualidad + " y el precio es de " + tazaCeramicaB.precio);
        carrito.push (tazaCeramicaB);
    }
    else if (elegirProducto == "5"){
        alert ("Seleccionaste Taza Mágica B. Es una " + tazaMagicaB.tipo + " de " + tazaMagicaB.cualidad + " y el precio es de " + tazaMagicaB.precio);
        carrito.push (tazaMagicaB);
    }
    else if (elegirProducto == "6"){
        alert ("Seleccionaste Taza Plástica A. Es una " + tazaPlasticaB.tipo + " de " + tazaPlasticaB.cualidad + " y el precio es de " + tazaPlasticaB.precio);
        carrito.push (tazaPlasticaB);
    }
    else {
        alert("Error al ingresar producto, volver a intentar");
    }

/*console.log ("*------------------------------------------------------------------------------*");

const agregarOtro = confirm ("Desea agregar otro producto? Ingrese Si, o cualquier tecla para finalizar");

    if (agregarOtro) {
        elegirProducto;
    }
    else {
        alert("Gracias por comprar con nosotros");
    }

console.log ("*------------------------------------------------------------------------------*");*/

console.log ("Cada Objeto del Array Carrito");
carrito.forEach ((item) => console.log (item));

console.log ("*------------------------------------------------------------------------------*");


//console.log (carrito);
