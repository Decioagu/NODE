const express = require('express')
const app = express()
const port = 3006

const path = require('path') // requerimento pagina (rota)

const basePath = path.join(__dirname, 'templates') /// acesso a pasta (arquivo HTML)

// rota = "users" e params = ":id"
app.get('/usuario/:id', (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`)
  res.sendFile(`${basePath}/usuario.html`) // acesso ao arquivo da pasta
})
// pagina principal host
app.get('/', (req, res) => {
  console.log(`Padina principal.`);
  res.sendFile(`${basePath}/index.html`) // acesso ao arquivo da pasta
})

app.listen(port, () => {
  console.log(`App rodando na porta: http://localhost${port}`)
})
