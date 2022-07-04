const path = require('path')

const customPath = '/relatorios/matheus/relatorio1.pdf'

// nome dos diretorios onde se encotra o arquivo
console.log(path.dirname(customPath))
// nome do arquivo
console.log(path.basename(customPath))
// extenção do arquivo
console.log(path.extname(customPath))
