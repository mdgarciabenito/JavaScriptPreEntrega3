/*Además, quería comentarte una observación en el código: Para optimizar el código y reducir las lineas de código, podrías usar la class Producto para definir los objetos dentro 
del array tazas. De este modo:

const tazas = [
    new Producto ("Taza Cerámica A", "taza", "cerámica", 15),
    new Producto ("Taza Mágica A", "taza", "mágica", 25),
    new Producto ("Taza Plástica A", "taza", "plástica", 15)
]*/


const articulosCarrito = []; 

const listaProductos = document.querySelector('#lista-productos');
//console.log(listaProductos);
const carrito = document.querySelector('#carrito')
//console.log(carrito);
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
//console.log(vaciarcarritoBtn);

const contenedorCarrito = document.querySelector('#lista-carrito tbody')
//console.log(contenedorCarrito);