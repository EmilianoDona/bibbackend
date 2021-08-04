const express = require('express')
const router = express.Router()
var nodemailer = require('nodemailer')

router.post('/contact', (req, res) => {
    const data = req.body;

    console.log(data);



    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bibliotecacentralumaza@gmail.com',
          pass: 'admin0223'
        }
      });

      const html = `
        <div style='font-size:30px'>
            Apellido: ${data.apellido}
            <br>
            Nombre: ${data.nombre}
            <br>
            Teléfono: ${data.telefono}
            <br>
            Email: ${data.email}
            <br>
            Mensaje: ${data.mensaje}
        </div>
      `;

      var mailOptions = {
        from: 'bibliotecacentralumaza@gmail.com',
        to: 'bibliotecacentralumaza@gmail.com',
        subject: 'Envío de información de contacto',
        html
      };


      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
            res.json({message: "Ocurrió un error al enviar el mensaje, reintente", status: 500});
        } else {
            res.json({message: "El mensaje fue enviado con éxito", status: 200});
        }
      });
});

router.post('/contact-reservacion', (req, res) => {
    const data = req.body;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bibliotecacentralumaza@gmail.com',
          pass: 'admin0223'
        }
      });

      const html = `
        <div style='font-size:30px'>
            Apellido: ${data.apellido}
            <br>
            Nombre: ${data.nombre}
            <br>
            Teléfono: ${data.telefono}
            <br>
            Email: ${data.email}
            <br>
            Mensaje: ${data.mensaje}
        </div>
      `;

      var mailOptions = {
        from: 'bibliotecacentralumaza@gmail.com',
        to: 'bibliotecacentralumaza@gmail.com',
        subject: 'Espacio Académico Cultural - Reservas Online',
        html
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.json({message: "Ocurrió un error al enviar el mensaje, reintente", status: 500});
        } else {
            res.json({message: "El mensaje fue enviado con éxito", status: 200});
        }
      });
});
module.exports = router;