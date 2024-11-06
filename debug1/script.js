// Esta é uma atividade de debug. Os códigos estão parcialmente criados, ou totalmente criados, mas funcionando incorretamente.

// Contexto: //
// Um mercado te pediu um sistema para ajudar organizar as seções e seus respectivos itens, além de algumas funcionalidades administrativas, como serviço de login e ponto. A equipe de TI anterior começou a desenvolver, mas não estava dando muito certo. O seu trabalho é fazer com que o sistema funcione.

let secoesMercado = {}

let hortifruti = []
let açougue = []
let padaria = []
let AdegaEBebidas = []
let laticiniosEFrios = []

function adicionarSecaoAoMercado(nomesecao, secao){
    secoesMercado[nomesecao] = secao;
    console.log(secoesMercado)
    return secoesMercado
};
adicionarSecaoAoMercado('hortifruti', hortifruti);
adicionarSecaoAoMercado('açougue', açougue);
adicionarSecaoAoMercado('padaria', padaria);
adicionarSecaoAoMercado('AdegaEBebidas', AdegaEBebidas);
adicionarSecaoAoMercado('laticiniosEfrios', laticiniosEFrios);

console.log(secoesMercado);


function adicionarItemASecao(novoItem, secao){
    secoesMercado[secao].push(novoItem);
    return secao;
};

adicionarItemASecao('Maçã', 'hortifruti');
adicionarItemASecao('Banana', 'hortifruti');
adicionarItemASecao('Uva', 'hortifruti');
adicionarItemASecao('Picanha', 'açougue');
adicionarItemASecao('Pão francês', 'padaria');
adicionarItemASecao('Pão doce', 'padaria');
adicionarItemASecao('Vinho branco', 'AdegaEBebidas');
adicionarItemASecao('Vinho tinto', 'AdegaEBebidas');
adicionarItemASecao('Queijo mussarela', 'laticiniosEfrios');
adicionarItemASecao('Queijo prato', 'laticiniosEfrios');
console.log(secoesMercado)


function retornarItemDaSecao(nomeItem, secao){
   const itemProcurado = secoesMercado[secao].find(item => item === nomeItem);
   return itemProcurado ? itemProcurado : `O item ${nomeItem} não foi encontrado na seção ${secao}.`;
}

console.log(retornarItemDaSecao('Banana', 'padaria'));
console.log(retornarItemDaSecao('Banana', 'hortifruti'));
console.log(retornarItemDaSecao('Vinho tinto', 'AdegaEBebidas'));



function retornaUtlimoItemDaSecao(secao){
   let ultimoItem = secoesMercado[secao][secoesMercado[secao].length - 1];
    return ultimoItem;
}

console.log(retornaUtlimoItemDaSecao('padaria'));
console.log(retornaUtlimoItemDaSecao('açougue'));
console.log(retornaUtlimoItemDaSecao('hortifruti'));


function consultaSecoesMercado(secoesMercado){
    for(let secao in secoesMercado){
        return secoesMercado;
    }
}

console.log(consultaSecoesMercado(secoesMercado))


function somaItens(totalA, totalB){
    let toNumberTotalA = Number(totalA);
    let toNumberTotalB = Number(totalB);

    if(toNumberTotalA != 0 && toNumberTotalB != 0){
        return toNumberTotalA + toNumberTotalB;
    }
}

console.log(somaItens('1', '1'));


function baterPonto(nome, numeroFicha){
    const funcionarios = ["Sônia", "Cage", "Alex", "Liu Ken"];
    if(funcionarios.includes(nome)){
        return "Turno processado";
    }else{
        return "Funcionario não cadastrado";
    }
}

console.log(baterPonto('Sônia', 0));
console.log(baterPonto('Paula', 0));
console.log(baterPonto('Cage', 0));

function loginSistema(nomeUsuario, senhaUsuario){
    
    const listaUsuarios = ["luffy123", "acer321", "nami"]

    
        if(nomeUsuario == 'luffy123'){
            if(senhaUsuario == 326541){
                return "Acesso liberado"
            }
        }if(nomeUsuario == 'acer321'){
            if(senhaUsuario == 741258){
                return "Acesso liberado"
            }
        }if(nomeUsuario == 'nami'){
            if(senhaUsuario == 963258){
                return "Acesso liberado"
            }
        }

        return 'Acesso negado'
}

console.log(loginSistema('luffy123', 326541));
console.log(loginSistema('luffy123', 32654));
console.log(loginSistema('nami', 3002654));
console.log(loginSistema('nami', 963258));
