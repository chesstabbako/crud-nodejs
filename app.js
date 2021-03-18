const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));/* funciona como un middleware y leera los archivos que esten en public */

app.get("/", (req, res) => {

    res.render("index", {titulo: "mi titulo dinamico"});

});

app.get("/servicios", (req, res) => {

    res.render("servicios", {tituloServicios: "mi servicio dinamico"});

});

app.use((req, res, next) => {

  res.status(404).render("404");

});

app.listen(port, () => {
    console.log(`Corriendo en http://localhost:${port}`);
});


















