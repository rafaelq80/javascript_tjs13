const leia = require("readline-sync");

let mensagem = leia.question("Digite uma mensagem: ");

console.log(mensagem);

let numero1 = leia.questionInt("Digite o primeiro numero: ");
let numero2 = leia.questionInt("Digite o segundo numero: ");

let soma = numero1 + numero2;

console.log("Soma: ", soma);