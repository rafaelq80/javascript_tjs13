const leia = require('readline-sync');

// Array.from() cria um novo array a partir de um objeto iterável (Array)
// { length: 2 } cria um objeto com 2 posições vazias (2 linhas)
// A função () => ... é executada para CADA linha da matriz
let matrizInteiros = Array.from({ length: 2 }, () => 
    
    // Para cada linha, criamos outro Array.from()
    // { length: 3 } cria 3 posições vazias (3 colunas)
    // A função () => ... é executada para CADA coluna
    Array.from({ length: 3 }, () => 
        
        // Para cada posição da matriz, pedimos um número ao usuário
        // Isso acontece 6 vezes no total (2 linhas x 3 colunas = 6 números)
        leia.questionInt("Digite um numero: ")
    )
);

// Resumo do que acontece:
// 1. Cria 2 linhas (length: 2)
// 2. Para cada linha, cria 3 colunas (length: 3)
// 3. Para cada coluna, pede um número ao usuário
// 4. Resultado final: matriz 2x3 totalmente preenchida

// Mostra a matriz completa na tela em formato de tabela
console.table(matrizInteiros);