const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const mascota= require('../models/mascotas');

router.get('/', async (req, res) => {

     try {

       const arrayMascotasDB= await mascota.find();
       console.log(arrayMascotasDB); 

      res.render('mascotas', {arrayMascotas: arrayMascotasDB})

     } catch (error) {

       console.log(error);

     }

});

router.get('/crear', (req, res) => {

  res.render('crear');

});

router.post('/', async (req, res) => {

  const body = req.body;
  console.log(body);

 try {
      await mascota.create(body)
      res.redirect('/mascotas')
  } catch (error) {
      console.log('error', error)
  }

});

router.get('/:id', async(req,res)=>{

  const id= req.params.id;

try {
  
  const mascotita= await mascota.findOne({_id: id});
  console.log(mascotita);
  res.render('detalle', {

    mascotita,
    error: false,
  
  });

} catch (error) {

  console.log(error);

  res.render('detalle', {

    error: true,
    mensaje: 'Esta mascota no se encuentra'
  
  });

}

});

router.delete('/:id', async (req, res) => {

const id= req.params.id;

try {

  const data = await mascota.findByIdAndDelete({_id:id});
  
  if (data) {

    res.json({

      estado: true,
      mensaje: "Eliminado"

    })
  } else {

    res.json({

      estado: false,
      mensaje: "Error al eliminar"

    })
    
  }
  
} catch (error) {

  console.log(error)

}

});

router.put('/:id', async(req, res) => {

   const id= req.params.id;
   const body= req.body;

  try {

    const dataMascota= await mascota.findByIdAndUpdate(id, body, { useFindAndModify: false });

    res.json({

     estado: true,
     mensaje: "Actualizado con exito"

    })
    
  } catch (error) {
    
    res.json({

      estado: false,
      mensaje: "Error al actualizar"
      
     })

  }

});

module.exports= router;




