const fs = require('fs')

fs.stat('novoarquivo.txt', (err, stats) => {
  if (err) {
    // O error()método grava uma mensagem de erro no console.
    console.error(err)
    return
  }
  // é um arquivo?
  console.log(stats.isFile())
  // é um diretório?
  console.log(stats.isDirectory())
  // é um link?
  console.log(stats.isSymbolicLink())
  // data de criação
  console.log(stats.ctime)
  // tamanho em byte
  console.log(stats.size)
})
