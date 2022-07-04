const os = require("os");

// Quantos cpus tem no servidor
console.log(os.cpus());
console.log('===================================');
// Quanto de memoria liver em byte
console.log(os.freemem());
console.log('===================================');
// Qual o diretório principal
console.log(os.homedir());
console.log('===================================');
// Sistema operacional
console.log(os.type());
console.log('===================================');