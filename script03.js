function cargarUsuario (){
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(response => response.json())
        .then(data => {
        console.log("===> Datos del usuario 10 <===");
        console.log(`Nombre: ${data.name}`);
        console.log(`Usuario: ${data.username}`);
        console.log(`Correo electrónico: ${data.email}`);
        })
        .catch(error => {
        console.error("Error:", error);
        });
}
cargarUsuario();