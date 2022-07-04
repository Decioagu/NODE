const express = require('express')
const app = express()
const port = 3003

const path = require('path') // requerimento pagina (rota)

// "__dirname" = retorna diretório atual onde arquivo JavaScript reside
// "__dirname" é direfente de './'
const basePath = path.join(__dirname, 'templates') // acesso a pasta (arquivo HTML)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`) // acesso ao arquivo da pasta
})

app.listen(port, () => {
  console.log(`App rodando na porta: http://localhost:${port}`)
})
