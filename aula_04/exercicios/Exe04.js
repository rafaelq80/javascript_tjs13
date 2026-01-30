const leia = require("readline-sync");

let idade, genero, categoria;

let back = 0, 
    front = 0, 
    mobile = 0, 
    full = 0, 
    total = 0, 
    somaIdade = 0, 
    media = 0;

let continua = true;

while(continua){

    idade = leia.questionInt("Digite a idade: ");

    let generoOpt = [
        "Mulher Cis", 
        "Homem Cis", 
        "Nao Binario", 
        "Mulher Trans", 
        "Homem Trans", 
        "Outros"
    ]

    genero = leia.keyInSelect(generoOpt, "Selecione o genero: ", {cancel: false}) + 1;

    let categoriaOpt = [
        "Backend",
        "Frontend",
        "Mobile",
        "Fullstack"
    ]

    categoria = leia.keyInSelect(categoriaOpt, "Selecione a categoria: ", {cancel: false}) + 1;

    // Total de pessoas desenvolvedoras Backend
    if (categoria === 1){
        back ++;
    }

    // Total de pessoas desenvolvedoras Frontend Mulheres (Cis e Trans)
    if(categoria === 2 && (genero === 1 || genero === 4)){
        front ++;
    }   

    // Total de pessoas desenvolvedoras Mobile Homens (Cis e Trans) maior de 40 anos
    if(categoria === 3 && (genero === 2 || genero === 5) && idade > 40){
        ++ mobile;
    } 

    // Total de pessoas desenvolvedoras Fullstack Não Binário menor de 30 anos
    if(categoria === 4 && genero === 3 && idade < 30){
        full ++;
    } 

    // Total de pessoas
    total ++;

    // Média de idade
    somaIdade += idade;
    media = somaIdade / total;

    continua = leia.keyInYNStrict("Deseja continuar? ");
}

console.log(`Total de pessoas Desenvolvedoras Backend: ${back}`);
console.log(`Total de pessoas Desenvolvedoras Frontend Mulheres (Cis e Trans): ${front}`);
console.log(`Total de pessoas Desenvolvedoras Mobile Homens (Cis e Trans) maiores de 40 anos: ${mobile}`);
console.log(`Total de pessoas Desenvolvedoras FullStack Não Binários menores de 30 anos: ${full}`);
console.log(`Total de pessoas que responderam a pesquisa: ${total}`);
console.log(`Média das idades: ${media}`);