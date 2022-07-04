const fs = require('fs')

// Se pasta não existir de forma sincrona
if (!fs.existsSync('./minhapasta')) {
  console.log('Não existe')

  // Criar pasta
  fs.mkdirSync('minhapasta')
  console.log('Pasta criada...')
}

// Se pasta existe
if (fs.existsSync('minhapasta')) {
  console.log('Existe')
}
