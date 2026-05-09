
const welcome = "¡Bienvenido al sistema interactivo!"
console.log(welcome);
alert(welcome)

let myName = prompt("¿Cuál es tu nombre?");
let mensaje


while (myName === ""){
    mensaje = "Error: Por favor, ingresa un nombre válido."
    console.error(mensaje);
    alert(mensaje);
    myName = prompt("¿Cuál es tu nombre?");
}

let myAge = prompt("¿Cuál es tu edad?");
let myAgeNumber = Number(myAge);

while (isNaN(myAgeNumber) || myAge <= 0  || myAge === ""){
    mensaje = "Error: Por favor, ingresa una edad válida."
    console.error(mensaje);
    alert(mensaje);
    myAge = prompt("¿Cuál es tu edad?");
    myAgeNumber = Number(myAge);
}

if (myAgeNumber < 18) {
    mensaje = `Hola ${myName}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
    console.log(mensaje);
    alert(mensaje);
}

else {
    mensaje = `Hola ${myName}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
    console.log(mensaje);
    alert(mensaje);
}



/*
En el HU1 de esta semana hacemos la utilización de prompt para solicitar al usuario que ingrese su nombre y su edad.

------ Validaciones ------
- Utilizamos un 'while' para que el nombre no quede vacío. 
- Utilizamos un 'while' para verificar que edad sea un número; cada una de las validaciones se encierra en un solo while utilizando el 'operador lógico' or (||)
    -Con 'isNaN' para verificar si efectivamente es un numero
- Con myAge === "" para que la edad no quede en blanco 
- Con myAge <= 0 para que no pueda poner números negativos o el cero.

Después de realizar la validación, se aplica un if/else en el que, dependiendo de la edad, se genera un mensaje u otro.

En este caso se declara la variable 'mensaje' al principio del programa y se le asigna un valor diferente en cada while y en el if/else para no repetir código.
*/