const express = require('express')
const path = require('path') // requerimento pagina (rota)
const rotas = require('./rotas/index') // importação de modulo criado na pasta rotas

const app = express()
const port = 3010

const basePath = path.join(__dirname, './templates') // acesso a pasta (arquivo HTML)

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

// tranformar informações em arquivo JSON
app.use(express.json())

// abilitar arquivo CSS
app.use(express.static('./'))

app.use('/usuario', rotas) // uso do módulo importado (<nome_da_rota>,<nome_importação>)

// pagina principal
app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

// para rotas não encotradas
app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta: http://localhost:${port}`)
})
