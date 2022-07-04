const express = require('express')
const app = express()
const port = 3007

const path = require('path') // requerimento pagina (rota)

const basePath = path.join(__dirname, 'templates')// acesso a pasta (arquivo HTML)

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)
// tranformar informações em arquivo JSON
app.use(express.json())

// acesso a pagina "userform.html" para cadrastrar usuario pelo metodo "GET"
app.get('/usuario/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`) // acesso ao arquivo da pasta
})

// acesso a pagina "userform.html" para cadrastrar usuario pelo metodo "POST"
app.post('/usuario/save', (req, res) => {
  const name = req.body.name // HTML input nome
  const age = req.body.age // HTML input age
  console.log(req.body)
  console.log(`nome: ${name} e idade ${age}`)
  res.sendFile(`${basePath}/userform.html`) // acesso ao arquivo da pasta
})

// rota = "users" e params = ":id"
/* app.get('/usuario/:id', (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`)
  res.sendFile(`${basePath}/users.html`) // acesso ao arquivo da pasta
}) */

// pagina principal
app.get('/', (req, res) => {
  console.log(`Padina principal.`);
  res.sendFile(`${basePath}/index.html`) // acesso ao arquivo da pasta
})

app.listen(port, () => {
  console.log(`App rodando na porta: http://localhost:${port}`)
})
