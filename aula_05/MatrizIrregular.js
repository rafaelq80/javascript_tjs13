let matriz = [
    [1, 7, 9],
    [2, 6, 4]
]

console.log(matriz[0].length);

for (let linha = 0; linha < matriz.length; linha ++){
    for (let coluna = 0; coluna < matriz[linha].length; coluna ++){
        console.log(`matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`)
    }
}
