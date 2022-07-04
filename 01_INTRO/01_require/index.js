//importar módulo "File System" ou 'fs' para manipular arquivo ex=> (arquivo.txt)
const fs = require('fs')

//fs.readFile(caminho até o arquivo, padrão de unicode, função)
fs.readFile('arquivo.txt', 'utf8', (err,data) => {
    (fs.readFile) ? console.log(data) : console.log(err)
})

