const leia = require('readline-sync')

let numero = leia.questionInt('Digite um numero inteiro: ')

let contador = 1

do {
	console.log(`${numero} x ${contador} = ${numero * contador}`)
	contador++
} while (contador <= 10)
