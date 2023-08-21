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

Array

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

let res = document.getElementById("res")
let clickBoton1 = document.getElementById("btnAgregarCarrito1")

clickBoton1.addEventListener("click", respuestaClick1)

function respuestaClick1 (){
    console.log("Respuesta");
}

let clickBoton2 = document.getElementById("btnAgregarCarrito2")

clickBoton2.addEventListener("click", respuestaClick2)

function respuestaClick2 (){
    console.log("Respuesta");
}