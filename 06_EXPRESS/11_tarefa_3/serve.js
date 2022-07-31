const express = require('express')
const path = require('path') // requerimento pagina (rota)
const rotas = require('./rotas/rotas') // importação de modulo criado na pasta rotas

const app = express()
const port = 5000

const basePath = path.join(__dirname, './templates') // acesso a pasta (arquivo HTML)

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

// tranformar informações em arquivo JSON
app.use(express.json())


app.use('/usuario', rotas) // uso do módulo importado (<nome_da_rota>,<nome_importação>)

// pagina principal
app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta: http://localhost:${port}`)
})
