
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





