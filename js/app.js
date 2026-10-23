// Menú dinámico básico usando datos JSON

let opcionesMenu = [];

// Cargar las opciones desde el archivo JSON.
async function cargarMenu() {
    try {
        const respuesta = await fetch("data/menu.json");
        const datos = await respuesta.json();
        opcionesMenu = datos.menu;
        mostrarMenu();
    } catch (error) {
        // Datos de respaldo si se abre sin servidor local.
        opcionesMenu = [
            { id: 1, nombre: "Inicio", enlace: "#inicio" },
            { id: 2, nombre: "Destinos", enlace: "#destinos" },
            { id: 3, nombre: "Reservas", enlace: "#reservas" },
            { id: 4, nombre: "Administrar menú", enlace: "#administrar" }
        ];
        mostrarMenu();
    }
}

// Mostrar las opciones en la página.
function mostrarMenu() {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";

    opcionesMenu.forEach(function(opcion) {
        const elemento = document.createElement("li");
        const enlace = document.createElement("a");

        enlace.textContent = opcion.nombre;
        enlace.href = opcion.enlace;

        elemento.appendChild(enlace);
        menu.appendChild(elemento);
    });

    mostrarListaOpciones();
}

// Mostrar la lista de opciones que se pueden administrar.
function mostrarListaOpciones() {
    const lista = document.getElementById("listaOpciones");
    lista.innerHTML = "";

    opcionesMenu.forEach(function(opcion) {
        const elemento = document.createElement("li");
        elemento.className = "opcion-menu";
        elemento.appendChild(document.createTextNode(opcion.nombre + " "));

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.type = "button";
        botonEliminar.addEventListener("click", function() {
            opcionesMenu = opcionesMenu.filter(function(item) {
                return item.id !== opcion.id;
            });
            guardarCambios();
        });

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar enlace";
        botonEditar.type = "button";
        botonEditar.addEventListener("click", function() {
            const nuevoEnlace = prompt("Escribe el nuevo enlace (ejemplo: #destinos):", opcion.enlace);
            if (nuevoEnlace === null) return;

            if (!esEnlaceValido(nuevoEnlace)) {
                document.getElementById("mensajeMenu").textContent = "Enlace no válido. Usa un enlace como #destinos o una URL https.";
                return;
            }

            opcion.enlace = nuevoEnlace;
            guardarCambios();
        });

        elemento.appendChild(botonEliminar);
        elemento.appendChild(botonEditar);
        lista.appendChild(elemento);
    });
}

// Comprobar que el enlace sea una sección (#...) o una dirección HTTP/HTTPS.
function esEnlaceValido(enlace) {
    if (/^#[a-zA-Z0-9_-]+$/.test(enlace)) return true;

    try {
        const url = new URL(enlace);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch (error) {
        return false;
    }
}

// Agregar una opción desde el formulario.
document.getElementById("formMenu").addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombreMenu").value.trim();
    const enlace = document.getElementById("enlaceMenu").value.trim();
    const mensaje = document.getElementById("mensajeMenu");

    if (nombre === "") {
        mensaje.textContent = "Escribe un nombre para la opción.";
        return;
    }

    if (!esEnlaceValido(enlace)) {
        mensaje.textContent = "Enlace no válido. Usa #destinos o una URL https.";
        return;
    }

    const idExiste = opcionesMenu.some(function(opcion) {
        return opcion.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if (idExiste) {
        mensaje.textContent = "Ya existe una opción con ese nombre.";
        return;
    }

    const nuevoId = opcionesMenu.length === 0
        ? 1
        : Math.max(...opcionesMenu.map(function(opcion) { return opcion.id; })) + 1;

    opcionesMenu.push({
        id: nuevoId,
        nombre: nombre,
        enlace: enlace
    });

    guardarCambios();
    document.getElementById("formMenu").reset();
    mensaje.textContent = "Opción agregada al menú.";
});

// Guardar los cambios en el navegador y volver a dibujar el menú.
function guardarCambios() {
    localStorage.setItem("turismoRDMenu", JSON.stringify(opcionesMenu));
    mostrarMenu();
}

// Formulario demostrativo de solicitud turística.
document.getElementById("formulario").addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const destino = document.getElementById("destino").value;

    document.getElementById("mensaje").textContent =
        "Gracias, " + nombre + ". Tu solicitud de información sobre " + destino +
        " es solo una demostración; no se ha realizado una reserva real.";

    this.reset();
});

// Si hay cambios guardados en este navegador, usarlos.
const menuGuardado = localStorage.getItem("turismoRDMenu");
if (menuGuardado) {
    try {
        opcionesMenu = JSON.parse(menuGuardado);
        mostrarMenu();
    } catch (error) {
        cargarMenu();
    }
} else {
    cargarMenu();
}
