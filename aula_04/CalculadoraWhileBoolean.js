const leia = require("readline-sync");

let continua = true;

while(continua){

    console.log("\n============================================");
    console.log("       CALCULADORA COM SWITCH CASE          ");
    console.log("============================================");
    console.log("(+) - Soma                                  ");
    console.log("(-) - Subtração                             ");
    console.log("(x) - Multiplicação                         ");
    console.log("(/) - Divisão                               ");
    console.log("============================================");
    console.log("                                            ");

    let numero1 = leia.questionFloat("Digite o primeiro numero: ", 
                                    {limitMessage: 'Digite um numero float'}
                                    );

    let numero2 = leia.questionFloat("Digite o segundo numero: ", 
                                    {limitMessage: 'Digite um numero float'}
                                    );

    let operacao = leia.keyIn("Digite a operacao: ");

    switch(operacao){
        case "+":
            console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
        case "-":
            console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
        case "x":
            console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`);
        break;
        case "/":
            console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
        default:
            console.log("Operacao Invalida!");
    }

    continua = leia.keyInYNStrict("Deseja continuar (Y/N)");

}

CSSConditionRule.log("\nPrograma Finalizado!")