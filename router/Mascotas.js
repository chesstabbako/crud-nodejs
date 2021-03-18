const express = require('express');
const router = express.Router();

const mascota= require('../models/mascotas');

router.get('/', async (req, res) => {

     try {

       const arrayMascotasDB= await mascota.find();
       console.log(arrayMascotasDB);

       res.render('/', {arrayMascotasDB})

     } catch (error) {

       console.log(error);

     }

});

module.exports= router;




