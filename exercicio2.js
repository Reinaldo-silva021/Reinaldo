/********************************************************************************
2. Crie uma função chamada ordenarPorIdade que receba um array de objetos representando
pessoas, cada uma com nome e idade. A função deve retornar o array ordenado pela idade em ordem crescente.
*******************************************************************************/ 

function ordenarPorIdade(pessoas) {
    return pessoas.sort((a, b) => a.idade - b.idade);
}

let pessoas = [
        { nome: "Pedro", idade: 19},
        { nome: "Lucas", idade: 29},
        { nome: "Ana", idade: 21},
        { nome: "Andrea", idade: 54},
        { nome: "Josué", idade: 89},
        { nome: "Mario", idade: 32},
    ]

let pessoasOrdenadas = ordenarPorIdade(pessoas)
console.log(pessoasOrdenadas)