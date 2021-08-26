const http = require("http");
const PORT = 8080;

http.createServer((request, response) => {
    // response.writeHead(200, { "Content-Type": "text/plain" })
    // response.write("Hola Mundo");
    // response.end();

    response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    response.writeHead(200, { "Content-Type": "application/csv" })
    response.write("id, nombre\n");
    response.write("1, Juan\n");
    response.write("2, Pablo\n");
    response.write("3, Manuel\n");
    response.end();


    // response.writeHead(200, { "Content-Type": "application/json" })
    // const persona = { id: 1, name: "Josue" };
    // response.write(JSON.stringify(persona));
    // response.end();
}).listen(PORT);

console.log(`Escuchando el puerto ${PORT}`);