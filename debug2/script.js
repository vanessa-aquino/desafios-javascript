// Esta é uma atividade de debug. Os códigos estão parcialmente criados, ou totalmente criados, mas funcionando incorretamente.
// Investigue o código, teste e corrija o que achar necessário.

// CONTEXTO //
// Você é desenvolvedor em uma empresa. Uma equipe de desenvolvedores começou a desenvolver uma solução para o cálculo dos orçamentos para um cliente da área de agropecuária e serviços agrícolas.
// O problema é que grande parte das funcionalidades desenvolvidas não faz exatamente o que está sendo proposto, quando não fazem nada.


// A função não faz a inserção de um produto como deveria ser feito. Além de sempre alterar o produto que estava antes, a lista sempre fica com um item vazio.

const produtosCotacao = [];

function insereProduto(produto){
    produtosCotacao.push(produto);
    return produtosCotacao ;
}

console.log(insereProduto({
    preco: 100,
    quantidade: 10, 
    nome: "Soja 25kg"
}))

// A função de criar produtos não está funcionando, o produto criado não retorna e dá um erro.

function criaProduto(preco, quantidade, nome){
    let produto = {
        preco: preco,
        quantidade: quantidade,
        nome: nome
    }

    return produto;
}

console.log(criaProduto(200, 150, "Feijão 25kg"));

// A função de renderizar produtos deve mostrar os preços no console para teste, porém não está funcionando como deveria. O produto é impresso no console, mas com o nome object, sendo que deveria imprimir o preço.

function renderizaProdutos(todosProdutos){
    for(let i = 0; i < todosProdutos.length; i++) {
        const precoDosProdutos = todosProdutos[i].preco;
        return precoDosProdutos;
    }

}

console.log(renderizaProdutos(produtosCotacao));

// A função de cadastrar serviços não atualiza a lista corretamente, com o novo elemento cadastrado. Sempre que um desenvolvedor tenta armazenar a lista atualizada após uma inserção, a variável fica com o valor undefined, e não com o valor atualizado da lista.

const listServico = [];

function cadastraServicos(servico){
    listServico.push(servico);
    return listServico;
}

console.log(cadastraServicos({servico: "Pulverização", tipo: "Gafanhotos", valor: 50}));
console.log(listServico);

// A função de calcular o valor do serviço não funciona. Ela recebe uma lista de serviços, mas o valor a cobrar calculado nunca é exatamente o valor correto a ser cobrado, quase sempre é menor, exceto quando o cliente faz apenas um serviço.

function calculaValorServico(clienteServicos){
    let totalServico = 0;

    for(let i = 0; i < clienteServicos.servico.length; i++) {
        let valorServico = clienteServicos.servico[i].preco * clienteServicos.servico[i].quantidade;
        totalServico += valorServico;
    }

    return totalServico;
 }
 

console.log(calculaValorServico({cliente: "Rafael", servico:[
     pulverizacao = {
        preco: 50,
        quantidade: 10
     },
     capina = {
         preco: 5,
         quantidade: 10
     },
     aragem = {
         preco: 200,
         quantidade: 10
     }
 
 ]}));
 

