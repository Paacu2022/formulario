const express=require ("express")
const router= express.Router()
const transport=  require ("../configuraciones/nodemailer")
const ReglasDeValidacion= require("../Validaciones/ReglasDeValidacion")

router.get ("/", (req, res)=>{
    res.render("form")
    
    })
     
    router.post("/",ReglasDeValidacion, async (req,res)=>{
   
        const {nombres, apellidos, correo, message}= req.body
        const emailMsg= {
            to: "atencioncliente@nuestraempresa.com",
            from: correo,
            subject: "Mensaje desde Formulario de contacto",
            html: `Contacto de ${nombres} ${apellidos}: ${message}`
          }
           
          const sendMailStatus = await transport.sendMail(emailMsg);
          let sendMailFeeback= ""
          if (sendMailStatus.rejected.length){
            sendMailFeeback="No pudimos enviar el formulario"
          } else {
            sendMailFeeback= "Formulario enviado y recibido con éxito"
          }

          res.render("form", {mensajeEnviado: sendMailFeeback})
        }
        );

module.exports= router