// Este módulo chalk não permite utilização de do médoto "const chalk = require(chalk)"
//https://bobbyhadz.com/blog/javascript-error-err-require-esm-require-of-es-module-not-supported
// OBS:  "type": "module" no package.json,
// npm init -y
// npm install chalk
import chalk from 'chalk'; // https://www.npmjs.com/package/chalk

const nota = 9;


if (nota >= 7) {
  console.log(chalk.green.bold("Parabéns, você passou!"));
} else {
  console.log(chalk.bgRed("Você foi reprovado..."));
}