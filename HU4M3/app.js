
const productForm = document.querySelector("#productForm")
const productName = document.querySelector("#productName")
const productPrice = document.querySelector("#productPrice")
const btnAgregar = document.querySelector("#btnAgregar")
const productList = document.querySelector("#productList")
const productosUl = document.querySelector("#products")
const btnSincronizar = document.querySelector("#btnSincronizar")


const URL_API = 'http://localhost:4000/productos'

let mensaje


let products = JSON.parse(localStorage.getItem("productos")) || []


document.addEventListener('DOMContentLoaded', () => {
    if (products.length > 0) {
        crearProductos()
        mensaje = `Se han cargado ${products.length} productos desde LocalStorage.`
        console.log(mensaje)
        
    } else {
        mensaje = "No hay productos en el LocalStorage."
        console.log(mensaje)
        
    }
});


productForm.addEventListener("submit", function(evento) {
    evento.preventDefault(); 

    const name = productName.value;

    const price = parseInt(productPrice.value); 

    if (name === "" || isNaN(price) || price <= 0) {
        mensaje = "Por favor, introduce un nombre válido y un precio mayor a 0."
        console.error(mensaje)
        
        return
    }


    const nuevoProducto = {
        id: Date.now().toString() ,
        name: name,
        price: price 
    }

    products.push(nuevoProducto)
    guardarEnLocalStorage()
    crearProductos()
    guardarProductoAPI(nuevoProducto)


    productForm.reset()
    productName.focus()

    mensaje = (`Producto agregado con éxito localmente: ${nuevoProducto.name}`)
    console.log(mensaje)
})


function crearProductos() {

    productosUl.innerHTML = ''

    products.forEach(function(producto) {
        const nuevoLi = document.createElement('li')
        nuevoLi.textContent = `${producto.name} - $${producto.price} `

        const btnEliminar = document.createElement('button')
        btnEliminar.textContent = "Eliminar"
        btnEliminar.className = "btnEliminar"

        btnEliminar.addEventListener('click', function() {
        
            productosUl.removeChild(nuevoLi)
            
            products = products.filter(item => item.id !== producto.id)
            guardarEnLocalStorage()
            eliminarProductoAPI(producto.id)

            console.log("Se eliminó el producto:", producto.name)
        });

        nuevoLi.appendChild(btnEliminar);
        productosUl.appendChild(nuevoLi); 
    });
}

function guardarEnLocalStorage() {
    localStorage.setItem("productos", JSON.stringify(products));
}


btnSincronizar.addEventListener('click', productosAPI);

// GET
async function productosAPI() {
    try {
        const respuesta = await fetch(URL_API);
        if (!respuesta.ok) throw new Error('Error en la respuesta del servidor.');
        
        const datosAPI = await respuesta.json();
        mensaje = ("API GET Respuesta exitosa:", datosAPI)
        console.log(mensaje)  
        

        if (datosAPI.length > 0) {
            products = datosAPI.map(item => ({
                id: item.id ? item.id.toString() : Date.now().toString(),
                name: item.name || item.nombre,
                price: parseInt(item.price || item.precio)
            }));
            
            guardarEnLocalStorage();
            crearProductos();
            alert("¡Aplicación sincronizada con la API con éxito!");
        }
    } catch (error) {
        console.error("Error en operación GET de la API:", error.message);
        mensaje = "Aviso: Trabajando de manera puramente local (JSON Server no detectado).";
        console.log(mensaje);
        
    }
} 

// POST
async function guardarProductoAPI(nuevoProducto) {
    try {
        const respuesta = await fetch(URL_API, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
            body: JSON.stringify(nuevoProducto)
        });
        const resultado = await respuesta.json();
        console.log("API POST Respuesta exitosa:", resultado);
    } catch (error) {
        console.error("Error en operación POST:", error.message);
    }
}

// DELETE
async function eliminarProductoAPI(id) {
    try {
        const respuesta = await fetch(`${URL_API}/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });
        console.log(`API DELETE Ejecutada para ID ${id}. Estatus: ${respuesta.status}`);
    } catch (error) {
        console.error("Error en operación DELETE en la API:", error.message);
    }
}