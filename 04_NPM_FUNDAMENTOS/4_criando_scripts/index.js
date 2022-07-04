// npm init -y
// npm install --save-dev
// https://lodash.com/docs/4.17.15
const _ = require("lodash");
const chalk = require("chalk");

const a = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const b = [0, 2, 4, 6, 8];
// Mescla recursivamente propriedades enumeráveis próprias e herdadas de objetos de origem no objeto de destino.
const diff = _.merge(a, b);

console.log(chalk.red.bold(diff));
