const fs = require('node:fs')

function LoadFile(file){
    return fs.readFileSync(file)
}

function AddRoutes(url, req, res){
    const FolderDir = './templates/'
    switch(url){
        case "/": res.end(LoadFile(FolderDir + "index.html"))
        break
        case "/about": res.end(LoadFile(FolderDir + "about.html"))
        break
    }
}


module.exports.AddRoutes = AddRoutes