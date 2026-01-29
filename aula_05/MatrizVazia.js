const leia = require("readline-sync")

//Definindo a Matriz (linhas)
let matriz = new Array(2);

// Adicionando as linhas da Matriz (colunas)
for(let indice = 0; indice < matriz.length; indice ++){
    matriz[indice] = Array(3);
}

// Entrada de dados na matriz via teclado
for (let linha = 0; linha < matriz.length; linha ++){
    for (let coluna = 0; coluna < matriz[linha].length; coluna ++){
       matriz[linha][coluna] = leia.questionInt(`matriz[${linha}][${coluna}] = `);
    }
}

// Exibir os dados
console.table(matriz);