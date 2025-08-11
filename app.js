// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creación de array para almacenar amigos.
let listaNombresAmigos = [];
let numeroDeAmigoSorteado = 0;
let listaHTML = document.getElementById("listaAmigos");

// Funciones necesarias
//Función para agregar amigo
function agregarNombreAmigo() {
    let nombre = document.getElementById("amigo").value;
    //Validación del nombre
    if (nombre == null || nombre === "" || typeof nombre !== "string" || !isNaN(nombre)) {
        alert("Por favor, ingrese un nombre válido.");
        limpiarCampoDeTexto();
    } else {
        // Agregar el nombre al array
        listaNombresAmigos.push(nombre);
        // Limpiar el campo de texto
        limpiarCampoDeTexto();

        // Actualizar la lista de amigos
        actualizarListaAmigos();

        console.log(listaNombresAmigos);
    }
}

//Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    // Limpiar la lista HTML antes de actualizar
    listaHTML.innerHTML = ""; 

    // Ciclo for para recorrer lista de amigos y presentarla en lista HTML
    for (let i = 0; i < listaNombresAmigos.length; i++){
        // Crear li
        let li = document.createElement("li");
        // poner el nombre de amigo en el li
        li.textContent = listaNombresAmigos[i];
        // Agregar a la list HTML
        listaHTML.appendChild(li);
    }
}

// Función para sortear amigo

function sortearAmigo() {
    
    // Validar si hay amigos en la lista
    if (listaNombresAmigos.length < 2 ) {
        alert("Por favor, agregue más personas antes de sortear.");
    } else {
        numeroDeAmigoSorteado = Math.floor(Math.random() * listaNombresAmigos.length);
        let amigoSorteado = listaNombresAmigos[numeroDeAmigoSorteado];

        // Mostrar el amigo que fue sorteado
        listaHTML.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
        
        // agregar color al texto del lista HTML
        listaHTML.style.color = "green";
        
    }
}

function limpiarCampoDeTexto() {
    document.getElementById("amigo").value="";
}