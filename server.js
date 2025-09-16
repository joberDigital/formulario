const express = require('express');
const app = express();
const correoEstatico = 'micorreo@gmail.com';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido a la página de contacto!');
});

app.post('/formulario/', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (nombre === '' || email === '' || mensaje === '') {
    return res.status(400).json({ error: 'Por favor, complete todos los campos.' });
  }

  const mensajeMail = `Nombre: ${nombre}\nCorreo electrónico: ${email}\nMensaje: ${mensaje}`;

  // Enviar mensaje por correo electrónico
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // or 'STARTTLS'
  });

  transporter.sendMail({
    from: correoEstatico,
    to: correoEstatico,
    subject: 'Mensaje desde sitio web',
    text: mensajeMail,
  }, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Error al enviar el mensaje.' });
    }
    res.json({ mensaje: 'Mensaje enviado con éxito!' });
  });
});


app.get('/formulario', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

// app.post('/contacto', (req, res) => {
//   const { nombre, email, mensaje } = req.body;

//   // Resto del código para enviar el mensaje por correo electrónico
// });

  
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
