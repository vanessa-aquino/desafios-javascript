// Você faz parte da equipe de inteligência da polícia e está investigando a troca de mensagens entre dois grupos de crackers. O chefe de polícia suspeita que eles estejam planejando algo, mas até agora, apenas algumas letras foram identificadas. A dificuldade está em separar essas letras em palavras compreensíveis, já que não há espaços entre elas.
// Sua missão é criar um programa que automatize o processo de contar quantas palavras existem no texto digitado, seguindo a regra: qualquer caractere que não seja uma letra minúscula de 'a' a 'z' é considerado um separador de palavra.

// O programa deve receber um texto com até 250 caracteres como entrada e deve fornecer como saída o número de palavras presentes no texto.

// Exemplos: //

// Entrada: sss.aasd.sss
// Saída: 3

// Entrada: sssaasdsSs
// Saída: 2

// Entrada: sssa1asdss
// Saída: 2

// Desenvolva um algoritmo capaz de resolver esse enigma e contar as palavras no texto fornecido, ajudando assim a polícia a decifrar as mensagens dos crackers.

function countWords(word) {
    const filteredWord = word.replace(/[^a-z]/g, " ");
    console.log(filteredWord);

    const splitTheText = filteredWord.split(" ").filter(word => word.length > 0);
    console.log(splitTheText)

    if(splitTheText > 250) {
        alert('Texto inválido, maior que 250 caracteres.');
    } else {
        alert(splitTheText.length)
    }
}

console.log(countWords("sa1asdss"));

