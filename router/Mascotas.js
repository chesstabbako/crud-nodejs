const express = require('express');
const router = express.Router();

const mascota= require('../models/mascotas');

router.get('/', async (req, res) => {

     try {

       const arrayMascotasDB= await mascota.find();
       /* console.log(arrayMascotasDB); */

      res.render('/', {arrayMascotasDB: arrayMascotasDB})

     } catch (error) {

       console.log(error);

     }

});

router.get('/crear', (req, res) => {

  res.render('crear');

});


module.exports= router;




