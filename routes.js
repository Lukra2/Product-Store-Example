const fs = require('node:fs')
//const fetch = require('node-fetch')

function LoadFile(file){
    return fs.readFileSync(file)
}


function AddRoutes(express){
    const FolderDir = './templates/'
    switch(url){
        case "/": res.end(LoadFile(FolderDir + "index.html"))
        break
        case "/about": res.end(LoadFile(FolderDir + "about.html"))
        break
        case "/users": //async () => {a = await fetch("https://api.github.com/users"); res.end(await a.json())}
        break
        default: res.end("Unknown route")
    }
}


module.exports.AddRoutes = AddRoutes