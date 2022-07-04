const express = require('express')
const app = express()
const port = 3005

const path = require('path') // requerimento pagina (rota)

const basePath = path.join(__dirname, 'templates') // acesso a pasta (arquivo HTML)

// autenticação de usuario
var checkAuth = function (req, res, next) {
  req.authStatus = true // resposta

  if (req.authStatus) {
    console.log('Está logado, pode continuar')
    next() // prosseguir
  } else {
    console.log('Não está logado, faça o login para continuar!')
    // fica preso na função (carrega infinitamente)
  }
}

app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`) // acesso a pasta (arquivo hospedado)
})

app.listen(port, () => {
  console.log(`App rodando na porta: http://localhost${port}`)
})
