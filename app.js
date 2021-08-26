require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");



// Servir contenido estatico
app.use(express.static("public"));


app.get("/", (request, response) => {
    response.render("home", {
        id: 1,
        name: "Josue Bravo",
        title: "A new title"
    });
    // response.send("Home page")
    // response.sendFile(__dirname + "/public/index.html");
})


app.get("/hola-mundo", (request, response) => {
    response.send("Hola mundo en su ruta")
})

app.get("/generic", (request, response) => {
    response.render("generic", {
        id: 1,
        name: "Generic Page",
        title: "Generic"
    });
    // response.sendFile(__dirname + "/public/generic.html");
})

app.get("/elements", (request, response) => {
    response.render("elements", {
        id: 1,
        name: "Elements Page",
        title: "Elements"
    });
    // response.sendFile(__dirname + "/public/elements.html");
})

app.get("*", (request, response) => {
    response.send("404 | Page not found")
    // response.sendFile(__dirname + "/public/404.html");
})


app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
});
