fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log("===> Nombres de los usuarios <===");
        data.forEach(usuario => {
            console.log(`Usuario ${usuario.id}: ${usuario.name}`);

        });
    })
    .catch(error => {
        console.error("Error:", error);
    });