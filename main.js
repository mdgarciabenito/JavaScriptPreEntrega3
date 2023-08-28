let articulosCarrito = [];
const listaProductos = document.getElementById("lista-productos");
const carrito = document.getElementById("carrito");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody"); 

document.addEventListener('DOMContentLoaded', ()=>{
    if(JSON.parse(localStorage.getItem('carrito')) == null){
        articulosCarrito = []
        console.log (articulosCarrito)
    }else{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito'))
        console.log (articulosCarrito)
    }
    carritoHTML();
})

listaProductos.addEventListener('click', agregarProducto);
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
carrito.addEventListener('click', eliminarProducto);

function agregarProducto(evt){
    if(evt.target.classList.contains('agregar-carrito')){
        const producto = evt.target.parentElement;
        leerDatosProducto(producto)
    }
}

function eliminarProducto(evt){
    console.log (evt.target.parentElement)
    if(evt.target.classList.contains('borrar-producto')){
        const producto = evt.target.parentElement.parentElement;
        const productoId = producto.querySelector('a').getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);
        carritoHTML();
    }
}

function leerDatosProducto(item){
    const infoProducto = {
        imagen: item.querySelector('img').src,
        titulo: item.querySelector('h1').textContent,
        precio: item.querySelector('.precio').textContent,
        id: item.querySelector('button').getAttribute('id'),
        cantidad: 1,
    }
    console.log(infoProducto)
    if (articulosCarrito.some( item => item.id === infoProducto.id)){
        const productos = articulosCarrito.map( producto => {
            if (producto.id === infoProducto.id){
                let cantidad = parseInt(producto.cantidad);
                cantidad +=1;
                producto.cantidad = cantidad;
                return producto;
            } else {
                return producto
            }
        })
        articulosCarrito = productos.slice();
    } else { articulosCarrito.push(infoProducto)}
    carritoHTML()
}


function carritoHTML(){
    limpiarCarrito();
    articulosCarrito.forEach(producto =>{
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td><img src="${producto.imagen}" width = "200"/></td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>
            <a href="#" class="borrar-producto" data-id="${producto.id}"> ❌ </a>
        </td>
        `;
        contenedorCarrito.appendChild(fila)
    })
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('articulosCarrito', JSON.stringify(articulosCarrito))
}

function limpiarCarrito(){
    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

function vaciarCarrito(){
    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        articulosCarrito = [];
        sincronizarStorage();
    }
}
