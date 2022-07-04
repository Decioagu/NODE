/* 
npm init -y
npm install express
npm install --save-dev nodemon

No arquivo "package.json" adicionar em "scripts:"

"start": "nodemon ./index.js localhost 3004"

ou seja 
("start": "nodemon <pasta_e_nome_do_arquivo> localhost <numero_porta>")
*/
const express = require('express')
const app = express()
const port = 3004

const path = require('path') // requerimento pagina (rota)

const basePath = path.join(__dirname, 'templates') // acesso a pasta (arquivo HTML)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`) // acesso ao arquivo da pasta
})

app.listen(port, () => {
  console.log(`App rodando na porta: http://localhost${port}`)
})
