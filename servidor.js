const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
    res.send('Respuesta de raiz')
})

app.listen(port, () => {
    console.log('Servidor Escuchando: ', port)
})