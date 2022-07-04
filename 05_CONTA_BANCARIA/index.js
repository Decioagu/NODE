// npm init -y
// npm install inquirer chalk
// importar modulos no NODE
const inquirer = require('inquirer');
const chalk = require('chalk');

// modulo integrado no NODE
const fs = require('fs');




// função principal de operação bancarias =====================================================================
function operacao() {
  console.log();
  console.log(chalk.bgYellow.white('Banco DSA')); // 1ª mensagem
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'acao',
        message: 'Escolha um opção abaixo:',
        choices: [
          'Criar conta',
          'Consultar Saldo',
          'Depositar',
          'Sacar',
          'Transferencia',
          'Sair',
        ],
      },
    ])
    .then((resposta) => {
      // variavel "acao" armazena valores de uma Array chamada "choices"
      const acao = resposta['acao']

      // "choices"= escolha ou opções
      if (acao === 'Criar conta') {
        criarConta() // função para criar conta
      } else if (acao === 'Depositar') {
        depositar() // função depositar valores em dinheiro
      } else if (acao === 'Consultar Saldo') {
        saldoDaConta() // função para ver saldo
      } else if (acao === 'Sacar') {
        saque() // função sacar valores em dinheiro
      } else if (acao === 'Transferencia') {
        transferencia() // função transferir valores em contas existentes
      } else if (acao === 'Sair') {
        console.log(chalk.bgYellow.black('Obrigado por usar nosso Banco DSA!!!'))
        process.exit() // encerrar programa
      }
    })
    .catch((erro)=>console.error(erro, '\nfunção operacao()'));
}

operacao(); // iniciar menu principal

// função auxiliar menuInteligente +==========================================================================+
function menuInteligente(op) {
  console.log(op)
  inquirer
    .prompt([
      {name: 'opcao', message: chalk.red('Deseja continuar [S/N]?')},
    ])
    .then((resposta)=>{
      
      if (resposta.opcao == 's' || resposta.opcao == 'S') {
        
        switch (op) {
          case 'Criar conta':
            criarConta() // retornar para o inicio da função criarConta()
            break;
        
          case 'Depositar':
            depositar() // retornar para o inicio da função depositar()
            break;

          case 'Consultar Saldo':
            saldoDaConta() // retornar para o inicio da função saldoDaConta()
            break;
          
          case 'Sacar':
            saque() // retornar para o inicio da função saque()
            break;

          case 'Transferencia':
            transferencia() // retornar para o inicio da função transferencia()
            break;
          default:
            console.log("Algo deu errado switch");
            break;
        }
      } else if(resposta.opcao == 'n' || resposta.opcao == 'N'){
        operacao() // iniciar menu principal
      } else {menuInteligente(op)} // retornar para o inicio da função menuInteligente()
    })
    .catch((erro)=>console.error(erro, '\nfunção menuInteligente()'));
}

// criar conta do usuário = "nomeDaConta" =====================================================================
function criarConta() {
  console.log();
  console.log(chalk.green('Parabéns por escolher banco DSA!'));
  console.log(chalk.green('Por favor, crie sua nova conta: '));

  // fução cria nova conta conforme condições pré estabelecidas
  novaConta();
}

// fução auxiliar cria nova conta conforme condições pré estabelecidas +======================================+
function novaConta() {
  inquirer
    .prompt([
      {
        name: 'nomeDaConta',
        message: 'Digite um nome para a sua conta:',
      },
    ])
    .then((resposta) => { 
      // armazena na variavel "nomeDaConta" nome digitada pelo usuário 
      const nomeDaConta = resposta['nomeDaConta'];
      
      // pasta existe? (se não existir pasta)
      if (!fs.existsSync('contas')) {
        fs.mkdirSync('contas') // crinovaConar pasta contas
      };

      // verificar se conta já existe "nomeDaConta" = usuário (caso exista)
      if (nomeDaConta === ''){ 
        console.log(chalk.bgRed.black('Favor digitar um nome de valor valido!'))
        menuInteligente('Criar conta') // Envia para função de Menu Inteligente

      } else if(fs.existsSync(`contas/${nomeDaConta}.json`)){
        console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
        menuInteligente('Criar conta') /// Envia para função de Menu Inteligente  

      } else {
         // cria nova conta em arquivo json ("nomeDaConta" = usuário com objeto {"saldo":0})
        fs.writeFileSync(`contas/${nomeDaConta}.json`, '{"saldo":0}', function (err) {console.log(err)});

        // mensagem de sucesso e retorno a opções
        console.log(chalk.bgGreen('Parabéns, sua conta foi criada!'))
        console.info(chalk.green('Nome da conta: ' + resposta['nomeDaConta']))
        operacao() // iniciar menu principal
      }
    })
    .catch((erro)=>console.error(erro, '\nfunção novaConta()'));
}

// função auxiliar checar se conta do usuário = "nomeDaConta" já existe e retornar verdadeiro ou falso ========
function checarConta(nomeDaConta) {
  if (!fs.existsSync(`contas/${nomeDaConta}.json`)) {
    console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
    return false // falso => conta não existe
  }

  return  true // verdadeiro => conta existe
}

// função depositar na conta do usuário =  "nomeDaConta" conforme condições pré estabelecidas +===============+
function depositar() {
  console.log();
  inquirer
    .prompt([
      {
        name: 'nomeDaConta',
        message: 'Qual o nome da sua conta?',
      },
    ])
    .then((resposta) => {
      // armazena na variavel "nomeDaConta" nome digitada pelo usuário  
      const nomeDaConta = resposta['nomeDaConta'];

      // usuário existe = "nomeDaConta" (caso não exista)
      if (!checarConta(nomeDaConta)) {
        menuInteligente('Depositar') // Envia para função de Menu Inteligente

      } else {
        inquirer
          .prompt([
            {
              name: 'valor',
              message: 'Quanto você deseja depositar?',
            },
          ])
          .then((resposta) => {
            // variavel "valor" armazena valor digitada pelo usuário 
            const valor = resposta['valor'];

            // valor digitado pelo usuário é numérico? (se não for) <funciona como um filtro>
            if (!valor || !isFinite(valor)){
              console.log(chalk.bgRed.black('Valor digitado não é valido!'));
              menuInteligente('Depositar') // Envia para função de Menu Inteligente

            } else {
              // função depositar valor {objeto} "saldo" na conta do usuário = "nomeDaConta"
              depositarValorNaConta(nomeDaConta, valor)
            }
          })
          .catch((erro)=>console.error(erro, '\nfunção depositar(1)'));
      } 
    })
    .catch((erro)=>console.error(erro, '\nfunção depositar(2)'));
}

// função auxiliar ler valor do {objeto} "saldo" na conta do usuário = "nomeDaConta" ==========================
function valorNaConta(nomeDaConta) {
  // "contaJSON" => escrito em string
  const contaJSON = fs.readFileSync(`contas/${nomeDaConta}.json`, {
    encoding: 'utf8',
    flag: 'r',
  })

  // retornar valor do {objeto} "saldo" na conta do usuário = "nomeDaConta"
  return JSON.parse(contaJSON) // transforma string em {objeto} JSON
}

// função auxiliar depositar valor {objeto} "saldo" na conta do usuário = "nomeDaConta" =======================
function depositarValorNaConta(nomeDaConta, valor) {
  // marmazena na variavel "valorAtualConta" o {objeto} "saldo" do usuário = "nomeDaConta" 
  const valorAtualConta = valorNaConta(nomeDaConta);
  
  // soma = (valor iserido pelo usuário + "saldo") e atualiza no "valorAtualConta.saldo"
  valorAtualConta.saldo = parseFloat(valor) + parseFloat(valorAtualConta.saldo);

  // escrever valor atualizado (soma) no {objeto} "saldo" na conta do usuário = "nomeDaConta"
  fs.writeFileSync(`contas/${nomeDaConta}.json`, JSON.stringify(valorAtualConta), function (err) {console.log(err)});

  // imprimir valores atualizado
  console.log(chalk.bgBlue.black(`Foi depositado o valor de R$${parseFloat(valor).toFixed(2)} na sua conta!`));
  console.log(chalk.bgBlue.black(`Saldo atual de sua conta é de R$${valorAtualConta.saldo.toFixed(2)}`));

  operacao() // iniciar menu principal
}


// função imprime valor do {objeto} "saldo" da conta do usuério = "nomeDaConta" +=============================+
function saldoDaConta() {
  console.log();
  inquirer
    .prompt([
      {
        name: 'nomeDaConta',
        message: 'Qual o nome da sua conta?',
      },
    ])
    .then((resposta) => {
      // armazena na variavel "nomeDaConta" nome digitada pelo usuário  
      const nomeDaConta = resposta['nomeDaConta'];

      // usuário existe = "nomeDaConta" (caso não exista)
      if (!checarConta(nomeDaConta)) {
        menuInteligente('Consultar Saldo') // Envia para função de Menu Inteligente
      } else {
        // marmazena na variavel "valorAtualConta" o {objeto} "saldo" do usuário = "nomeDaConta"
        const valorAtualConta = valorNaConta(nomeDaConta);

        // imprimir valor atualizado do {objeto} "saldo"
        console.log(chalk.bgBlue.black(`Saldo atual de sua conta é de R$${valorAtualConta.saldo.toFixed(2)}`));

        operacao() // iniciar menu principal
      }      
    })
    .catch((erro)=>console.error(erro, '\nfunção saldoDaConta()'));
}

// função sacar dinheiro da conta do usuário = "nomeDaConta" +================================================+
function saque() {
  inquirer
    .prompt([
      {
        name: 'nomeDaConta',
        message: 'Qual o nome da sua conta?',
      },
    ])
    .then((resposta) => {
      // armazena na variavel "nomeDaConta" nome digitada pelo usuário  
      const nomeDaConta = resposta['nomeDaConta'];

      // usuário existe = "nomeDaConta" (caso não exista)
      if (!checarConta(nomeDaConta)) {
        menuInteligente('Sacar') // Envia para função de Menu Inteligente

      } else {
        inquirer
        .prompt([
          {
            name: 'valor',
            message: 'Quanto você deseja sacar?',
          },
        ])
        .then((resposta) => {
          // variavel "valor" armazena valor digitada pelo usuário
          const valor = resposta['valor'];

          // função que subtrai valor do {objeto} "saldo" 
          retirarValorDaConta(nomeDaConta, valor)
        })
        .catch((erro)=>console.error(erro,  '\nSaque(1)'));
      }
    })
    .catch((erro)=>console.error(erro, '\nSaque(2)'));
}

// função auxiliar subtração valor do "saldo" conforme condições pré estabelecidas +==========================+
function retirarValorDaConta(nomeDaConta, valor) {
  // marmazena na variavel "valorAtualConta" o {objeto} "saldo" do usuário = "nomeDaConta"
  const valorAtualConta = valorNaConta(nomeDaConta);

  // subtrai valor do {objeto} "saldo" se valor for um número menor que "valorAtualConta"
  if (!valor || !isFinite(valor)) {
    console.log(chalk.bgRed.black('Digite um valor valido!'));
    menuInteligente('Sacar') // Envia para função de Menu Inteligente
  } else if (valorAtualConta.saldo < valor) {
    console.log(chalk.bgRed.black('Valor indisponível!'));
    menuInteligente('Sacar') // Envia para função de Menu Inteligente
  } else {
    // subtração = (valor iserido pelo usuário - "saldo") e atualiza no "valorAtualConta.saldo"
    valorAtualConta.saldo = parseFloat(valorAtualConta.saldo) - parseFloat(valor)

    // escrever valor atualizado (subtração) no {objeto} "saldo" na conta do usuário = "nomeDaConta"
    fs.writeFileSync(`contas/${nomeDaConta}.json`, JSON.stringify(valorAtualConta), function (err) {console.log(err)});
  
    // imprimir valores atualizado
    console.log(chalk.bgBlue.black(`Foi realizado um saque de R$${parseFloat(valor).toFixed(2)} da sua conta!`));
    console.log(chalk.bgBlue.black(`Saldo atual de sua conta é de R$${valorAtualConta.saldo.toFixed(2)}`));

    operacao() // iniciar menu principal
  }
}

// função transfere valores de contas existentes conforme condições pré estabelecidas +=======================+
function transferencia() {
  console.log();
  inquirer
    .prompt([
      {name: 'nomeDevedor', message: 'Informe nome de sua conta:'}
    ])
    .then((resposta)=>{
      // armazena na variavel "nomeDevedor" nome digitada pelo usuário 
      const nomeDevedor = resposta.nomeDevedor

      // usuário existe = "nomeDevedor" (caso não exista)
      if (!checarConta(nomeDevedor)) {
        menuInteligente('Transferencia') // Envia para função de Menu Inteligente
      } else {
        inquirer
          .prompt([
            {name: 'nomeBenificiario', message: 'Informe nome da cota para deposito:'}
          ])
          .then((resposta)=>{
              // armazena na variavel "nomeDevedor" nome digitada pelo usuário 
              const nomeBenificiario = resposta.nomeBenificiario

              // usuário existe = "nomeDevedor" (caso não exista)
              if (!checarConta(nomeBenificiario)) {
                menuInteligente('Transferencia') // Envia para função de Menu Inteligente
              } else {
                inquirer
                  .prompt([
                    {
                      name: 'valor',
                      message: 'Quanto você deseja transferir?',
                    },
                  ])
                  .then((resposta) => {
                    // variavel "valor" armazena valor digitada pelo usuário
                    const valor = resposta['valor'];
              
                    // função que subtrai valor do {objeto} "saldo" 
                    transferenciaEntreContas(nomeDevedor, nomeBenificiario, valor)
                  })
                  .catch((erro)=>console.error(erro,  '\ntranferencia(3)'));
              }
          })
          .catch((erro)=>console.error(erro,  '\ntranferencia(2)'));
      }
    })
    .catch((erro)=>console.error(erro,  '\ntranferencia(1)'));
}

// função auxiliar faz transfere dos saldos das "contaDevedor" e "contaBenificiario" se houver saldo  +=======+
function transferenciaEntreContas(contaDevedor, contaBenificiario, valor) {
  // marmazena na variavel "valorAtualContaDevedor" o {objeto} "saldo" do usuário = "contaDevedor"
  const valorAtualContaDevedor = valorNaConta(contaDevedor);
  // marmazena na variavel "valorAtualDaContaBenificiario" o {objeto} "saldo" do usuário = "contaBenificiario"
  const valorAtualDaContaBenificiario = valorNaConta(contaBenificiario);

  // subtrai valor do {objeto} "saldo" se valor for um número menor que "valorAtualConta"
  if (!valor || !isFinite(valor)) {
    console.log(chalk.bgRed.black('Digite um valor valido!'));
    menuInteligente('Transferencia') // Envia para função de Menu Inteligente

  } else if (valorAtualContaDevedor.saldo < valor) {
    console.log(chalk.bgRed.black('Valor indisponível!'));
    menuInteligente('Transferencia') // Envia para função de Menu Inteligente

  } else {
    // subtração = (valor iserido pelo usuário - "saldo") e atualiza no "valorAtualContaDevedor.saldo"
    valorAtualContaDevedor.saldo = parseFloat(valorAtualContaDevedor.saldo) - parseFloat(valor);
    // soma = (valor iserido pelo usuário + "saldo") e atualiza no "valorAtualDaContaBenificiario.saldo"
    valorAtualDaContaBenificiario.saldo = parseFloat(valorAtualDaContaBenificiario.saldo) + parseFloat(valor);

    // escrever valor atualizado (subtração) no {objeto} "saldo" na conta do usuário = "contaDevedor"
    fs.writeFileSync(`contas/${contaDevedor}.json`, JSON.stringify(valorAtualContaDevedor), function (err) {console.log(err)});
    // escrever valor atualizado (soma) no {objeto} "saldo" na conta do usuário = "contaBenificiario"
    fs.writeFileSync(`contas/${contaBenificiario}.json`, JSON.stringify(valorAtualDaContaBenificiario), function (err) {console.log(err)});
  
    // imprimir valores atualizado
    console.log(chalk.bgBlue.black(`Transferencia de R$${parseFloat(valor).toFixed(2)} realizada com sucesso!`));
    console.log(chalk.bgBlue.black(`Saldo atual de sua conta é de R$${valorAtualContaDevedor.saldo.toFixed(2)}`));

    operacao() // iniciar menu principal
    
    /* // Testes...
    console.log();
    console.log(chalk.bgBlue.black(`Saldo ${contaDevedor} R$${valorAtualContaDevedor.saldo.toFixed(2)}`));
    console.log(chalk.bgBlue.black(`Saldo ${contaBenificiario} R$${valorAtualDaContaBenificiario.saldo.toFixed(2)}`)); */
  }
}
