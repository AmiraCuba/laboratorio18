const botonCargar = document.getElementById("boton");
const divDatos = document.getElementById("datos");
botonCargar.addEventListener(`click`, cargarDatos2);
async function cargarDatos2() {
    try {
        const usuario = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const usuarioJson = await usuario.json();
        let titulo2 = document.createElement("h2");
        titulo2.textContent = "Datos del usuario 2"
        divDatos.appendChild(titulo2);
        let nombre = document.createElement("p");
        nombre.textContent = `Nombre: ${usuarioJson.name}`;
        divDatos.appendChild(nombre);
        let gmail = document.createElement("p");
        gmail.textContent = `Correo electrónico: ${usuarioJson.email}`;
        divDatos.appendChild(gmail);
        let ciudad = document.createElement("p");
        ciudad.textContent = `Ciudad: ${usuarioJson.address.city}`;
        divDatos.appendChild(ciudad);
    } catch (e) {
        console.error("Error:", e);
    }
}