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

console.log ("Cada Objeto del Array tazas IVA");

/*tazas.forEach(function(taza){
    console.log (taza)
})*/

tazasIVA.forEach ((taza) => console.log (taza));

console.log ("*------------------------------------------------------------------------------*");

let articulosCarrito = [];
console.log (articulosCarrito);
const listaProductos = document.getElementById("lista-productos");
console.log (listaProductos);
const carrito = document.getElementById("carrito");
console.log (carrito);
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
console.log (vaciarCarritoBtn);
const contenedorCarrito = document.getElementById("lista-carrito tbody");
console.log (contenedorCarrito);

document.addEventListener('DOMContentLoaded', ()=>{
    if(JSON.parse(localStorage.getItem('carrito')) == null){
        articulosCarrito = []
        console.log (articulosCarrito)
    }else{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito'))
        console.log (articulosCarrito)
    }
})

listaProductos.addEventListener('click', agregarProducto);

function agregarProducto(evt){
    if(evt.target.classList.contains('agregar-carrito')){
        const producto = evt.target.parentElement;
        leerDatosProducto(producto)
    }
}

function leerDatosProducto(item){
    const infoProducto = {
        imagen: item.querySelector('img').src,
        titulo: item.querySelector('h1').textContent,
        precio: item.querySelector('.precio').textContent,
    }
    console.log (infoProducto)
    articulosCarrito.push(infoProducto)
    carritoHTML()
}

function carritoHTML(){
    articulosCarrito.forEach(producto =>{
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td><img src="${producto.imagen} width = "100"/></td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto"> ❌ </a>
        </td>
        `;
        contenedorCarrito.appendChild(fila)
    })
}

console.log ("*------------------------------------------------------------------------------*");
//let res = document.getElementById("res")
let clickBoton1 = document.getElementById("btnAgregarCarrito1");

clickBoton1.addEventListener("click", respuestaClick1);

function respuestaClick1 (){
    console.log("Respuesta1");
}

let clickBoton2 = document.getElementById("btnAgregarCarrito2");

clickBoton2.addEventListener("click", respuestaClick2);

function respuestaClick2 (){
    console.log("Respuesta2");
}

let clickBoton3 = document.getElementById("btnAgregarCarrito3");

clickBoton3.addEventListener("click", respuestaClick3);

function respuestaClick3 (){
    console.log("Respuesta3");
}

let clickBoton4 = document.getElementById("btnAgregarCarrito4");

clickBoton4.addEventListener("click", respuestaClick4);

function respuestaClick4 (){
    console.log("Respuesta4");
}

let clickBoton5 = document.getElementById("btnAgregarCarrito5");

clickBoton5.addEventListener("click", respuestaClick5);

function respuestaClick5 (){
    console.log("Respuesta5");
}

let clickBoton6 = document.getElementById("btnAgregarCarrito6");

clickBoton6.addEventListener("click", respuestaClick6);

function respuestaClick6 (){
    console.log("Respuesta6");
}