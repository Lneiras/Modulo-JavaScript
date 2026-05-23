
const inputNota = document.getElementById("inputNota");
const btnAgregarNota = document.querySelector("#btnAgregarNota");
const listaNotas = document.querySelector("#listaNotas");

console.log("Referencia del Input:", inputNota);
console.log("Referencia del Botón:", btnAgregarNota);
console.log("Referencia de la Lista:", listaNotas);


// Aquí se guardan las notas en un array y se sincronizan con localStorage
let notas = JSON.parse(localStorage.getItem("notas")) || [];


// Con esta funcion creamos las notas, en formato <li> y con un botón para eliminar cada nota
function crearNota(textoNota) {

    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = textoNota;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btnEliminar"; // esto es para darle estilo al botón en el CSS

    // ======== Esto es para eliminar una nota ========

    /* Debido a que el botón eliminar se crea cuando se guarda la nota, se agrega esta parte para que quede "guardado" y, si se hace click en el botón, se ejecute la eliminación. */

    btnEliminar.addEventListener('click', function() {
        listaNotas.removeChild(nuevoLi);
        
        // con esto eliminamos la nota del array y actualizamos el localStorage
        notas = notas.filter(function(n) { return n !== textoNota; });
        localStorage.setItem("notas", JSON.stringify(notas));

        console.log("Se eliminó la nota:", textoNota);
    });

    nuevoLi.appendChild(btnEliminar);
    return nuevoLi;
}

// al cargar la página, trae las notas que están guardadas en localStorage y las muestra en la lista
if (notas.length > 0) {
    notas.forEach(function(texto) {
        const li = crearNota(texto);
        listaNotas.appendChild(li);
    });
    console.log("Se han cargado " + notas.length + " notas");
} else {
    console.log("No hay notas guardadas.");
}


// ======== Esto es para agregar una nota ========

btnAgregarNota.addEventListener("click", function() {

    const textoNota = inputNota.value;

    // Con esto validamos que la nota no está vacía
    if (textoNota === "") {
        alert("La nota no puede estar vacía. Por favor, escribe algo");
        return;
    }

    const li = crearNota(textoNota);  
    listaNotas.appendChild(li);

    // con esto lo guardamos en el array y en localStorage
    notas.push(textoNota);
    localStorage.setItem("notas", JSON.stringify(notas));

    /* Con esto hacemos que el espacio de la nota quede en blanco y no tengamos que borrar después de guardar la nota y que podamos escribir un mensaje nuevo */
    inputNota.value = "";
    inputNota.focus();

    console.log("Nota agregada con exito");
});