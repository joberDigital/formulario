const express = require('express');
const app = express();
const correoEstatico = 'micorreo@gmail.com';

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// app.post('/formulario/', (req, res) => {
//   // Código para manejar la solicitud POST en la ruta "/formulario/"
// });

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

