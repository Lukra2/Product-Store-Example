const http = require('node:http')
const routes = require('./routes')
const DB = require('./db')
const port = 8080

const server = http.createServer((req, res) => {
    var url = req.url;
    routes.AddRoutes(url, req, res);
})
http.get()
server.on('listening', () => {
    console.log("Server running at PORT " + port)
})
server.on('connection', (stream) => {
    console.log("User connected!")
})
server.listen(port)