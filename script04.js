async function cargarUsuario (){
    try {    
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const data = await respuesta.json();
        console.log("===> Datos del usuario 10 <===");
        console.log(`Nombre: ${data.name}`);
        console.log(`Usuario: ${data.username}`);
        console.log(`Correo electrónico: ${data.email}`);
        }
    catch (e) {
        console.error("Error:", e);
    };
}
cargarUsuario();