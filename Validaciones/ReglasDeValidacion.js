const { body , validationResult } = require('express-validator');

const ReglasDeValidacion= [
    body("nombres")
      .notEmpty().withMessage("Debe ingresar su nombre")
      .isLength({min:2, max:30}).withMessage("Debe contener minimo de 2 y maximo de 30"),
      body("apellidos")
      .notEmpty().withMessage("Debe ingresar su apellido")
      .isLength({min:2, max:30}).withMessage("Debe contener minimo de 2 y maximo de 30"),
      body("correo", "Debe ingresar un Email valido")
      .notEmpty()
      .isEmail(),
      body("message", "El mensaje debe contener entre 10 y 300 caracteres")
      .notEmpty()
      .trim(" ")
      .isLength({min:2, max:300}),
      (req, res, next)=>{
        const errors= validationResult(req);
      
      if (!errors.isEmpty()){
        const formData = req.body 
        const arrayErrors = errors.array()
        res.render ("form", {arrayErrors , formData})
      } else return next()

    }
    ]

    module.exports= ReglasDeValidacion


    