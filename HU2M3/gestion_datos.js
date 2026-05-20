
// Creamos el objeto de productos 

let productos = [
    { id: 101, nombre: "Laptop", precio: 1200 },
    { id: 102, nombre: "Mouse", precio: 25 },
    { id: 103, nombre: "Teclado", precio: 45 }
]

//  Uso de Set en JavaScript

/* Creamos un Array (lista) con números repetidos y luego creamos un set para eliminar los números repetidos */

const numeros = [1,2,2,3,4,4,5,5];
const numerosSet = new Set(numeros)


// Muestra cómo el set elimina los duplicados 
console.log("\nNúmeros en el Set:");
console.log(numerosSet) 

// Agrega un nuevo número al Set utilizando el método .add() 
console.log("\nAgregando un número al Set:");
numerosSet.add(8) 
console.log(numerosSet)

//Verifica si un número específico existe dentro del Set con .has().
console.log("\nVerificando si un número existe en el Set:");
console.log("\nVerificando número 4");
console.log(numerosSet.has(4))// Muestra que el número 4 está dentro del set
console.log("\nVerificando número 6");
console.log(numerosSet.has(6))// Muestra que el número 6 no está dentro del set

// Elimina un número del Set con .delete().

console.log("\nEliminando el número 3 del Set:");
numerosSet.delete(3) 
console.log(numerosSet)

// Recorre el Set utilizando un for…of para mostrar cada valor.

console.log("\nRecorriendo el Set:");
for ( const numero of numerosSet){
    console.log(numero);
}

//  Creación de un Map 

let  mapCategoria = new Map()

// Aquí se le añaden varios elementos a el Map

mapCategoria = new Map([
["Computador", "Laptop"],
["Periféricos", "Mouse"],
])

console.log("\n--Categorías-Map:--\n");
console.log(mapCategoria)

// Aquí se le añade 1 elemento a el Map utilizando la función .set()

console.log("\n--Añadiendo elemento Silla Ergonómica al Map:--\n");

mapCategoria.set("Oficina", "Silla Ergonómica");

console.log(mapCategoria)

// Iteración sobre las estructuras de datos

//  for…in 
/* En este caso con el 'for...in' recorremos el array de objetos que creamos al principio del ejercicio 'productos' debido a que itera sobre los índices se crea una variable que utilice el indice para que con el concole.log podamos mostrar la infonmación de cada objeto*/

console.log("\nProductos:");
for (const indice in productos) {
    const producto = productos[indice]; 

    console.log(`índice: ${indice}, ID: ${producto.id}, Producto: ${producto.nombre}, Precio: $${producto.precio}`);
}


//  for…of 
/* En este caso con 'for..of' recorremos todo el set y con console.log mostramos cada numero dentro del set */
console.log("\n--Números en el Set:--");
for (const numero of numerosSet) {
    console.log(numero);
}

//  forEach
/* recorremos el Map utilizando el método .forEach(). Con console.log mostramos cada categoría y su item correspondiente */
console.log("\n--Categorías y productos:--");
mapCategoria.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} -> Producto: ${valor}`);
});

// Validación y pruebas


// Implementa validaciones para asegurar que cada producto tenga id, nombre y precio válidos.
console.log("\n--Validación de productos:--");
for (const producto of productos) {
    const llaves = Object.keys(producto); 
    
    if (llaves.length === 3 && producto.id && producto.nombre && producto.precio) {
        console.log(`El producto "${producto.nombre}" es válido.`);
    } else {
        console.log(`Error: El producto con ID ${producto.id} tiene datos incompletos.`);
    }
}

// Lista completa de productos (objeto)
console.log("\n1. Lista completa de productos");
console.log(Object.values(productos)); 

// Lista de productos únicos (Set)
const productosSet = new Set(productos); // aquí convertimos la lista de objetos en un set para ver cada producto sin repetirse
console.log("\n2. Lista de productos únicos");
for (const producto of productosSet) {
    console.log(`- ${producto.nombre}`);
}

// Categorías y nombres de productos (Map)
console.log("\n3. Categorías y nombres de productos:");
console.log(Object.fromEntries(mapCategoria));

/* con object.fromEntries() convertimos el Map en un objeto para mostrar cada categoría y su producto correspondiente de una manera más clara */

