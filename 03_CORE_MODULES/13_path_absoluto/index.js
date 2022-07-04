const path = require('path')

// path absoluto (informa o endereço completo onde se encotra o arquivo)
console.log(path.resolve('teste.txt'))

// formar path (constroi um endereço dinâmico)
const midFolder = 'relatorios'
const fileName = 'matheus.txt'
// O método path.join() une os segmentos de caminho especificados em um caminho.
const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)
