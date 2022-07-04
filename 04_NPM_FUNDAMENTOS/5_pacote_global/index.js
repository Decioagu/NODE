// npm init -y
// npm install -g <nome> (realiza instalação de form global no PC)
// npm link <nome> (carrega as instalações globais na pasta do projeto)
const _ = require('lodash')

const arr = [1, 2, 2, 3, 9, 9, 4, 5, 6, 6, 7, 8, 8]

// Esse método elimina valores iguais no array.
console.log(_.sortedUniq(arr))
