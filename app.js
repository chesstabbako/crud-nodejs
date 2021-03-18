const express = require("express");
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require('dotenv').config();

const port = process.env.PORT || 3000;

//conexion a base de datos
const mongoose= require('mongoose');

const uri= `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.w0ko4.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
     {useNewUrlParser: true, useUnifiedTopology: true})
     .then( ()=> console.log('Base de datos conectada'))
     .catch( (error)=> console.log('error: ' + error));


//Usando ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));/* funciona como un middleware y leera los archivos que esten en public */

//Llamando a las rutas
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {

  res.status(404).render("404");

});

app.listen(port, () => {
    console.log(`Corriendo en http://localhost:${port}`);
});


















