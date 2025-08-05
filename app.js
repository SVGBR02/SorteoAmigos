// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombre = (document.getElementById('amigo').value);

    if (nombre === '') 
        {alert('El nombre no puede estar vacío'); 
        return;}
    else if (amigos.includes(nombre)) 
        {alert('El nombre ya está en la lista'); 
        return;}
        
    amigos.push(nombre);
    
    // Crear un nuevo elemento <li>
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;

    // Agregarlo a la lista con id "listaAmigos"
    document.getElementById('listaAmigos').appendChild(nuevoElemento);

    console.log(amigos);

    actualizarLista(); // 👈 Llamamos a la función que actualiza la lista
}

function actualizarLista() {
    // 1️⃣ Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // 2️⃣ Limpiar la lista existente
    lista.innerHTML = '';

    // 3️⃣ Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // 4️⃣ Crear y agregar elementos <li>
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // 1️⃣ Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos para sortear, inserte amigos');
        return;
    }

    // 2️⃣ Generar un número aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3️⃣ Seleccionar un amigo al azar
    let amigoSorteado = amigos[indiceAleatorio];

    // 4️⃣ Mostrar el resultado
    alert(`El amigo sorteado es: ${amigoSorteado}`);
}