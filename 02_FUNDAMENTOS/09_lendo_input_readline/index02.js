const readline = require('readline');

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  terminal.question("Qual é o x? ", x => {

    console.log(x);

    terminal.question("Qual é o y? ", y => {

        console.log(y);
        console.log(x,y);
        terminal.close();

    });

});