
const readline = require('readline-sync');
const add = require('./math/add');
const subtract = require('./math/subtract');
const multiply = require('./math/multiply');
const divide = require('./math/divide');
const sqrt = require('./math/sqrt');
function main() {
  console.log('Welcome to the Node.js Math Library!\n');
  const operations = ['add', 'subtract', 'multiply', 'divide', 'sqrt'];
  const operation = readline.keyInSelect(operations, 'Choose an operation:');
  if (operation === -1) {
    console.log('Operation canceled');
    return;
  }
  let num1, num2, result;
  switch (operations[operation]) {
    case 'add':
      num1 = parseFloat(readline.question('Enter the first number: '));
      num2 = parseFloat(readline.question('Enter the second number: '));
      result = add(num1, num2);
      break;
    case 'subtract':
      num1 = parseFloat(readline.question('Enter the first number: '));
      num2 = parseFloat(readline.question('Enter the second number: '));
      result = subtract(num1, num2);
      break;
    case 'multiply':
      num1 = parseFloat(readline.question('Enter the first number: '));
      num2 = parseFloat(readline.question('Enter the second number: '));
      result = multiply(num1, num2);
      break;
    case 'divide':
      num1 = parseFloat(readline.question('Enter the first number: '));
      num2 = parseFloat(readline.question('Enter the second number: '));
      result = divide(num1, num2);
      break;
    case 'sqrt':
      num1 = parseFloat(readline.question('Enter the number: '));
      result = sqrt(num1);
      break;
    default:
      console.log('Invalid operation');
      return;
  }
  console.log(`The result is: ${result}`);
}
main();










