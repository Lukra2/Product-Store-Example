const express = require('express')
const ExpressHBS = require('express-handlebars')
const routes = require('./routes')
const DB = require('./db')
const port = 8080

const server = express()
// Configuring
server.engine("handlebars", ExpressHBS.engine({}))
server.set("view engine", "handlebars")
server.use(express.static("./views"))

// Routing
server.get("/", (req,res) => {
    res.render('index', {layout: false});
})

//Listening
server.listen(port, () => {console.log("Server started at http://localhost:" + port)})