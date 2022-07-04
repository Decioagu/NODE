const express = require('express')
const router = express.Router() // gerenciador de rotas
const path = require('path') // requerimento pagina (rota)

const basePath = path.join(__dirname, '../templates') // acesso a pasta (arquivo HTML)

// acesso a pagina "userform.html" para cadrastrar usuario pelo metodo "GET"
router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`) // acesso ao arquivo da pasta
})

// acesso a pagina "userform.html" para cadrastrar usuario pelo metodo "POST"
router.post('/save', (req, res) => {
  const name = req.body.name // HTML input nome
  const age = req.body.age // HTML input age
  console.log(req.body)
  console.log(`nome: ${name} e idade ${age}`)
  res.sendFile(`${basePath}/userform.html`) // acesso ao arquivo da pasta
})

// rota = "users" e params = ":id"
router.get('/:id', (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`)
  res.sendFile(`${basePath}/users.html`) // acesso ao arquivo da pasta
})

module.exports = router // exportar arquivo
