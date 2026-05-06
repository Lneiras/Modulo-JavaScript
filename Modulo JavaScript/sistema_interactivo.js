
console.log("¡Bienvenido al sistema interactivo!");

let myName = prompt("¿Cuál es tu nombre?");
let myAge = prompt("¿Cuál es tu edad?");

const myAgeNumber = Number(myAge);

if (isNaN(myAgeNumber)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
    alert("Error: Por favor, ingresa una edad válida en números.");
} 

else if (myAgeNumber < 18) {
    console.log(`Hola ${myName}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
    alert(`Hola ${myName}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
}

else {
    console.log(`Hola ${myName}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
    alert(`Hola ${myName}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
}

/*
En el HU1 de esta semana hacemos la utilizacion de prompt para solicitar al usuario que ingrese su nombre y su edad.
luego nombramos una variable para convertir el string de la edad a numero y con if ademas de isNaN validamos si efectivamente el usuario ingreso un numero, si no es asi se muestra un mensaje de error con alert() y con concole.error() que lo deja registrado en la consola y luego utiliazmos esle if  y else para que se muestre un mensaje dependiendo de si el usuario es mayor o menor de edad.
*/