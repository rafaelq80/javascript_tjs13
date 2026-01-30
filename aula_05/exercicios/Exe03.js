let matriz = [
    [1, 2, 3, 3],
    [4, 5, 6, 6],
    [7, 8, 9, 9],
    [7, 8, 9, 12]
]

let diagonalP = "", diagonalS = "";
let somaDiagonalP = 0, somaDiagonalS = 0;

for(let indice = 0; indice < matriz.length; indice ++){
    diagonalP += matriz[indice][indice] + " ";
    somaDiagonalP += matriz[indice][indice];
    diagonalS += matriz[indice][matriz.length - 1 - indice] + " ";
    somaDiagonalS += matriz[indice][matriz.length - 1 - indice];
}

console.log(`A Diagonal Principal da Matriz é: ${diagonalP}`);
console.log(`A soma dos valores da Diagonal Principal da Matriz é: ${somaDiagonalP}`);
console.log(`A Diagonal Secundária da Matriz é: ${diagonalS}`);
console.log(`A soma dos valores da Diagonal Secundária da Matriz é: ${somaDiagonalS}`);