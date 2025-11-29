const botonCargar = document.getElementById("boton");
const divDatos = document.getElementById("datos");
botonCargar.addEventListener(`click`, cargarDatos2);
function cargarDatos2() {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(response => response.json())
        .then(data => {
            let titulo2 = document.createElement("h2");
            titulo2.textContent = "Datos del usuario 2"
            divDatos.appendChild(titulo2);
            let nombre = document.createElement("p");
            nombre.textContent = `Nombre: ${data.name}`;
            divDatos.appendChild(nombre);
            let gmail = document.createElement("p");
            gmail.textContent = `Correo electrónico: ${data.email}`;
            divDatos.appendChild(gmail);
            let ciudad = document.createElement("p");
            ciudad.textContent = `Ciudad: ${data.address.city}`;
            divDatos.appendChild(ciudad);
        })
    .catch(error => {
        console.error("Error:", error);
    });
}