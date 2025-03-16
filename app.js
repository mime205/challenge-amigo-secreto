let arregloDeAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo == "") {
        alert("Debes ingresar un nombre");
        return;
    }
    if (!isNaN(nombreAmigo)) {
        alert("El nombre no puede ser un número");
        return;
    }
    arregloDeAmigos.push(nombreAmigo)
    console.log(arregloDeAmigos);

    refrescarListadoDeAmigosEnPantalla();

    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    let amigoSorteado = arregloDeAmigos[Math.floor(Math.random() * arregloDeAmigos.length)];
    document.getElementById("resultado").textContent = amigoSorteado;

    let index = arregloDeAmigos.indexOf(amigoSorteado); 
    arregloDeAmigos.splice(index, 1);
    console.log(arregloDeAmigos);

    refrescarListadoDeAmigosEnPantalla();
}

function refrescarListadoDeAmigosEnPantalla() {
    let listaVisual = document.getElementById("listaAmigos")
    listaVisual.innerHTML = "";
    for (let i = 0; i < arregloDeAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = arregloDeAmigos[i];
        listaVisual.appendChild(item);
    }
}
   