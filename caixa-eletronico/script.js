// Nesta atividade vamos desenvolver as funcionalidades de um caixa eletrônico, a partir das informações de um cliente.
// Dado o objeto:

const user = {
    name: "Jhon Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
        {
          number: "5160 4196 4843 3388",
          creditBalance: 1000,
          ensign: "American Express",
        },
      ],
    };

// Iremos desenvolver as seguintes funcionalidades:
// 1. Saldo;
// 2. Depósito;
// 3. Saque.

const  desiredFunctionality = prompt('Escolha a operação desejada: Digite 1 para Saldo, digite 2 para Depósito ou digite 3 para Saque.');

if(desiredFunctionality == '1') {
  let chooseAccount = prompt('Escolha a conta que deseja acessar: Digite 1 para Poupança ou digite 2 para Crédito');
  let yourUsername = prompt('Digite seu nome de usuário:');

  function getBalance() {
    let balance;
    if(chooseAccount === '1' && yourUsername === user.name) {
      balance = user.savingsBalance;
    } else if(chooseAccount === '2' && yourUsername === user.name) {
      balance = user.cardsInformation[0].creditBalance;
    }

    return alert(`Seu saldo é: ${balance}`)
  }

  getBalance()
};


function depositFunction() {
  if(desiredFunctionality == '2') {
    let yourUsername = prompt('Digite seu nome de usuário:');
    let valueForDeposit = prompt('Digite o valor desejado para o depósito');
  
    if(yourUsername != user.name) {
      alert('Username não encontrado.');
      return;
    } 
    
    if(valueForDeposit < 5 || valueForDeposit > 500) {
      alert('This value is not allowed.');
    } else {
      function makeDeposit() {
        let strToNumber = parseInt(valueForDeposit, 10);
        console.log(strToNumber)
        let sum = user.savingsBalance + strToNumber;
        user.savingsBalance = sum;
        alert('Deposit made succefully.')
      }
  
      makeDeposit();
    }
  }
}
depositFunction()


function drawalFunction() {

  if(desiredFunctionality == '3') {
    let yourUsername = prompt('Digite seu nome de usuário:');
    let responseWithDraw = prompt('Digite de onde o valor será sacado: Digite 1 para Poupança ou 2 para Crédito');
    let withDrawnAmount = prompt('Digite o valor que deseja sacar:');
    let withDrawnAmounToNumber = parseInt(withDrawnAmount, 10);
  
    if(yourUsername != user.name) {
      alert('Username não encontrado.');
      return;
    } 
  
  function makeWithDrawal() {
    if(withDrawnAmount < 5 || withDrawnAmount > 500 || withDrawnAmount % 1 != 0) { 
          return alert('This value is not allowed.')
    }
    
    if(responseWithDraw == '1' && withDrawnAmount > user.savingsBalance) {
      alert('Balance unavailable');
  
    } else if(responseWithDraw == '1') {
      let withdrawalFromSavings =  user.savingsBalance - withDrawnAmounToNumber;
      user.savingsBalance = withdrawalFromSavings;
      alert('Withdrawal carried out.' )
    }
  
    if(responseWithDraw == '2' && withDrawnAmount > user.cardsInformation[0].creditBalance) {
      alert('Balance unavailable.');
  
    } else if(responseWithDraw == '2') {
      let removedFromCredit = user.cardsInformation[0].creditBalance - withDrawnAmounToNumber;
      user.cardsInformation[0].creditBalance = removedFromCredit;
      alert('Withdrawal carried out.');
    }
  }
  
  makeWithDrawal();
  
  }
} 

drawalFunction();

console.log(user.savingsBalance);
console.log(user.cardsInformation[0].creditBalance)