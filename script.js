// Desenvolva um algoritmo para uma casa de eventos que solicite ao usuário seu nome, idade e se está acompanhado. Crie três variáveis: nome, idade e estaAcompanhado.
// A variável estaAcompanhado é do tipo booleana, mas o usuário vai fornecer a resposta como "s" para sim ou "n" para não.
// Teste se a idade é igual ou superior a 18 anos. Se não for, exiba um alerta informando: "Entrada não permitida para [nome]: Menor de idade."
// Se a idade for 18 anos ou mais, verifique se o usuário está acompanhado. Se estiver, exiba: "Entrada permitida para [nome]: Conceder desconto." Caso contrário, exiba: "Entrada permitida para [nome]: Valor integral."


let name = prompt('Digite seu nome');
let age = Number(prompt('Digite sua idade'));
let isAccompanied = prompt('Você está acompanhado? Digite "s" para Sim e "n" para Não');

name.toLowerCase();
isAccompanied.toLowerCase();

if(age < 18) {
    alert(`Entrada não permitida para ${name}: Menor de idade.`);
}

if(age >= 18) {
    if(isAccompanied === 's') {
        alert(`Entrada permitida para ${name}: Conceder desconto.`);
    } else {
        alert(`Entrada permitida para ${name}: Valor integral.`);
    }
}

