const express = require('express')
const app = express()
const port = 3002

/* uso do medoto "get" ("req" = requisição de informações contida no servidor, "res" = é a informação enviada para o usuário conforme regra de negócio) */
app.get('/', (req, res) => {
  res.send('Olá Mundo!!') // mostra texto
})

app.listen(port, () => {
  console.log(`App rodando na porta: http://localhost:${port}`)
})
