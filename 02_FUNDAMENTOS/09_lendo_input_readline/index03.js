const readline = require('readline');

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminal.question("Digite a nota 1? ", nota1 => {
    terminal.question("Digite o peso da nota 1? ", peso1 => {
        terminal.question("Digite a nota 2? ", nota2 => {
            terminal.question("Digite o peso da nota 2? ", peso2 => {
                terminal.question("Digite a nota 3? ", nota3 => {
                    terminal.question("Digite o peso da nota 3? ", peso3 => {

                        const media = parseFloat(nota1) * parseFloat(peso1) + 
                                      parseFloat(nota2) * parseFloat(peso2) +
                                      parseFloat(nota3) * parseFloat(peso3);

                        console.log("Média: " + media);
                        terminal.close();
                    });
                });
            });
        });
    });
});