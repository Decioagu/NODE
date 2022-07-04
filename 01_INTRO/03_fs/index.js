var fs = require('fs');

// cria arquivo.txt e adiciona texto toda vez que é acionado
fs.appendFile('./add/arquivo.txt', `Decio Santana de Aguiar \n`, function (err) {
  if (err) throw err;
  console.log('Saved!');
});