let matriz = [
    [1, 7, 9],
    [2, 6, 4],
    [3, 5, 8]
]

for (let linha = 0; linha < matriz.length; linha ++){
    for (let coluna = 0; coluna <matriz.length; coluna ++){
        console.log(`matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`)
    }
}
