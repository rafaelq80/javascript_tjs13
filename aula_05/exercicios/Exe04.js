const leia = require('readline-sync');

let media = Array(10);
let soma = 0.0;
let nNotas = 0;

let matriz = Array.from({ length: 2 }, () => 
    Array.from({ length: 4 }, () =>
        leia.questionInt("Digite uma nota: ")
    )
);

for(let linha = 0; linha < matriz.length; linha ++){
    for(let coluna = 0; coluna < matriz[linha].length; coluna ++){
        soma += matriz[linha][coluna];
        nNotas ++;
    }

    media[linha] = soma / nNotas;
    soma = 0.0;
    nNotas = 0;
}

console.table(media);