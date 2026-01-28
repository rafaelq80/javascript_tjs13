const leia = require("readline-sync");

let media = leia.questionFloat("Digite a media do aluno: ", 
                                {limitMessage: 'Digite um numero float'}
                                );

if (media >= 7){
    console.log("Aluno Aprovado!");
}else if (media >= 5 && media < 7){
    console.log("Aluno de exame");
}else{
    console.log("Aluno Reprovado!");
}
