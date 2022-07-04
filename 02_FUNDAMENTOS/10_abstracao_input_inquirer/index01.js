// npm init -y
// npm install inquirer <=> (Promises)
const inquirer = require('inquirer') // http://adilapapaya.com/docs/inquirer/

inquirer.prompt([
    { name: 'nota1', message: 'Qual a primeira nota?' },
    { name: 'nota2', message: 'Qual a segunda nota?' },
  ]).then((resposta) => {
        console.log(resposta)
        const media = (parseInt(resposta.nota1) + parseInt(resposta.nota2)) / 2
        console.log(`A média do aluno é ${media}`)
  }).catch((erro) => {
        console.log(erro)
  })