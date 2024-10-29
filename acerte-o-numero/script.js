// Desenvolva a Função de Geração de Número Aleatório:
// Crie uma função chamada gerarNumeroAleatorio() que não recebe parâmetros. Esta função deve utilizar Math.random() para gerar um número aleatório. Para garantir que o número gerado seja um inteiro positivo até 20, você precisa arredondar o valor para o inteiro mais próximo.

// Desenvolva a Função para Verificar o Palpite:
// Crie uma função chamada verificarPalpite(numeroAleatorio, palpite). Esta função receberá o número aleatório gerado e o palpite do usuário. Inicie uma variável chamada tentativa com o valor 1.
// Use um laço while para verificar se o numeroAleatorio é igual ao palpite. A cada iteração do laço, incremente a variável tentativa em +1. nquanto o palpite estiver incorreto, emita um alerta com a mensagem: "Tente novamente." Se o palpite estiver correto, emita um alerta indicando a tentativa: "Você acertou na tentativa [x]."

// Gere o Número Aleatório e Obtenha o Palpite do Usuário:
// Crie uma variável chamada numeroAleatorio para armazenar o resultado da função gerarNumeroAleatorio().
// Utilize o prompt para obter o palpite do usuário. Assegure-se de aceitar somente inteiros positivos.

// Chame a Função de Verificação de Palpite:
// Chame a função verificarPalpite(numeroAleatorio, palpite) passando o número aleatório gerado e o palpite do usuário como argumentos.

function generateRandomNumber() {
    const randomNumberGenerator = Math.floor(Math.random() * 20) + 1;
    return randomNumberGenerator;
  }
  
  function checkGuess(randomNumber, guess) {
    let attempt = 1;
    
    while (guess != randomNumber) {
        alert('Tente novamente.')
        guess = parseInt(prompt('Digite seu palpite (número entre 1 e 20):'));
        attempt++;

    }
  
    alert(`Você acertou na tentativa ${attempt}.`);
  }

const randomNumber = generateRandomNumber();
const guess = parseInt(prompt('Digite seu palpite (número entre 1 e 20):'));

checkGuess(randomNumber, guess);



  