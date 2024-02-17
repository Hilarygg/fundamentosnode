const http = require('http')
const port = 5000

const server = http.createServer((req, res) => {
    res.sendDate('Que onda alumnos')
})

server.listen(port, () => {
    console.log('Servidor trabajando')
})