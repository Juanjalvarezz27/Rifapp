const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // Puedes usar cualquier puerto que no esté en uso

app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); //para que el backend pueda recibir json del frontend

app.get('/', (req, res) => {
    res.send('¡Hola desde el backend!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});