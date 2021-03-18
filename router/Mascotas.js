const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

  res.render("mascotas", {

    arrayMascotas: [

       {id: 'jjjkkkkk', nombre: 'perro', descripcion: 'hola'},
       {id: 'jjjkkkhhggkk', nombre: 'gato', descripcion: 'hola mundo 2'},

    ]

  });

})

module.exports= router;




