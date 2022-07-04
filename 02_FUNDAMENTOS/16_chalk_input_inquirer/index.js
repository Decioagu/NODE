// Este módulo chalk não permite utilização de do médoto "const chalk = require(chalk)"
//https://bobbyhadz.com/blog/javascript-error-err-require-esm-require-of-es-module-not-supported
// OBS:  "type": "module" no package.json,
// npm init -y
// npm install chalk
// npm install inquirer
import chalk from 'chalk'; // https://www.npmjs.com/package/chalk
import inquirer from 'inquirer'; // http://adilapapaya.com/docs/inquirer/

function avaliar() {
  inquirer.prompt([
    {name: 'nota', message: chalk.bgYellow.black('Digite sua nota: ')},
  ]).then(res =>{
    // "isFinite()" retorna verdadeiro ou falso para valores numéricos
      if (!res.nota || !isFinite(res.nota)){
        console.log(chalk.bgRed('Faltou digitar um valor numérico!\n'))
        avaliar()
      } else if (res.nota < 0 || res.nota > 10) {
        console.log(chalk.bgRed('Valor digitado deve ser de 0 até 10!\n'))
        avaliar()
      } else if (res.nota >= 7) {
        console.log(chalk.green.bold("Parabéns, você passou!"));
      } else {
        console.log(chalk.red.bold("Você foi reprovado..."));
      }
    })
    .catch((erro) => console.error(erro))
}
avaliar()

