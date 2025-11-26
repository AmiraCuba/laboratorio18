async function nombresUsuarios(){
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await respuesta.json();
        console.log("===> Nombres de los usuarios <===");
        data.forEach(usuario => {
            console.log(`Usuario ${usuario.id}: ${usuario.name}`);
        })
    }
    catch(e) {
    console.error("Error:", error);
    }
}
nombresUsuarios();