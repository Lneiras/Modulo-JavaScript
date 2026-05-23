
const inputNota = document.querySelector("#inputNota");
const btnAgregarNota = document.querySelector("#btnAgregarNota");
const listaNotas = document.querySelector("#listaNotas");

console.log("Referencia del Input:", inputNota);
console.log("Referencia del Botón:", btnAgregarNota);
console.log("Referencia de la Lista:", listaNotas);


// ======== Esto es para agregar una nota ========

btnAgregarNota.addEventListener("click", function(){

    const textoNota = inputNota.value;

    // Con esto validamos que la nota no está vacía
    if (textoNota === "") {
        alert("¡No puedes agregar una nota vacía!");
        return; // Detiene el código aquí para que no cree nada
    }

    /* Con esto creamos el li que contendrá el texto que el usuario ingresa y también creamos el botón para eliminar la nota */
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = textoNota;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";


    // ======== Esto es para eliminar una nota ========

    /* Debido a que el botón eliminar se crea cuando se guarda la nota, se agrega esta parte para que quede "guardado" y, si se hace click en el botón, se ejecute la eliminación. */
    btnEliminar.addEventListener('click', function() {

        listaNotas.removeChild(nuevoLi);
        console.log("Se eliminó la nota.");

    });

    listaNotas.appendChild(nuevoLi);
    nuevoLi.appendChild(btnEliminar);

    /* Con esto hacemos que el espacio de la nota quede en blanco y no tengamos que borrar después de guardar la nota y que podamos escribir un mensaje nuevo */
    inputNota.value = "";  
    inputNota.focus();

    console.log("Se agregó la nota.");

})



