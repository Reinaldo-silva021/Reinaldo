/********************************************************************************
    1. Escreva uma função chamada contarOcorrencias que receba um array de números 
    e retorne um objeto contendo a frequência de cada número no array.
*******************************************************************************/ 

function contarOcorrencias(array) {
    let frequencia = {}
    array.forEach(numero => {
        if(frequencia[numero]) {
            frequencia[numero] += 1;
        } else {
            frequencia[numero] = 1;
        }
    });

    return frequencia;
}

let numeros = [5, 4, 3, 5, 6, 3, 6, 10, 4, 10, 15, 15, 3, 6, 4]
resultado = contarOcorrencias(numeros)
console.log(resultado)