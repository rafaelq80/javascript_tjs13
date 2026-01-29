const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero inteiro: ");

for(let contador = 1; contador <= 10; contador ++){
    console.log(`${numero} x ${contador} = ${numero * contador}`);
}