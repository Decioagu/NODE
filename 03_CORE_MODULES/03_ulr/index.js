const url = require('url')
const address = 'https://www.meusite.com.br/catalogo?produtos=cadeira'
const parsedUrl = new url.URL(address) // extrair informações da "url"
const inf = url.parse(address, true) // extrair informações da "url"

console.log('-------------------------------------------------------------');
console.log(parsedUrl.host) // "host" = (hospedeiro) => endereço WEB = "https://www.meusite.com.br"
console.log(parsedUrl.pathname) // "path" = (rota) => "catalogo"
console.log(parsedUrl.search) // "search" = (pesquisa) => "produtos=cadeira" 
console.log('-------------------------------------------------------------');
console.log(parsedUrl); // retorna um objeto "url"
console.log('\n === Informações ===');
console.log(parsedUrl.searchParams) // retorna objeto {"chave" => "valor"}
console.log(parsedUrl.searchParams.get('produtos')) // informa "valor" da "chave" especifica no objeto
console.log('==========================================');
console.log(inf); // retorna um objeto "url"
console.log('\n === Informações ===');
console.log(inf.query);
console.log(inf.query.produtos);
console.log('==========================================');
