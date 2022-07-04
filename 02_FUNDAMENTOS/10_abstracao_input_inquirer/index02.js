const inquirer = require('inquirer');
inquirer.prompt([
  {
    name: 'idade',
    message: 'Digite sua idade:',
    type: 'number',
    validate(value) {
      return +value > 18 ? true : 'test';
    }
  }
])