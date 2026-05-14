
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
console.log(numerosSet) 

// Agrega un nuevo número al Set utilizando el método .add() 
numerosSet.add(8) 
console.log(numerosSet)

//Verifica si un número específico existe dentro del Set con .has().
console.log(numerosSet.has(4))// Muestra que el número 4 está dentro del set

console.log(numerosSet.has(6))// Muestra que el número 6 no está dentro del set

// Elimina un número del Set con .delete().

numerosSet.delete(3) 
console.log(numerosSet)

// Recorre el Set utilizando un for…of para mostrar cada valor.

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

console.log(mapCategoria)

// Aquí se le añade 1 elemento a el Map utilizando la función .set()

mapCategoria.set("Oficina", "Silla Ergonómica");

console.log(mapCategoria)

// Iteración sobre las estructuras de datos

//  for…in 
/* En este caso con el 'for...in' recorremos el array de objetos que creamos al principio del ejercicio 'productos' debido a que itera sobre los índices se crea una variable que utilice el indice para que con el concole.log podamos mostrar la infonmación de cada objeto*/


for (const indice in productos) {
    const producto = productos[indice]; 

    console.log(`índice: ${indice}, ID: ${producto.id}, Producto: ${producto.nombre}, Precio: $${producto.precio}`);
}


//  for…of 
/* En este caso con 'for..of' recorremos todo el set y con console.log mostramos cada numero dentro del set */
for (const numero of numerosSet) {
    console.log(numero);
}


//  forEach

mapCategoria.forEach(({categoria, item}) => {
console.log(`categoria: ${categoria} | item: ${item}` );
})