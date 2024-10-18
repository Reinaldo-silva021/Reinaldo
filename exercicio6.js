/********************************************************************************
6. Escreva uma função substituirElemento que receba um array, um valor antigo e um novo valor. A função deve substituir todas as ocorrências do valor antigo pelo novo valor no array.
*******************************************************************************/

function substituirElemento(array, valorAntigo, valorNovo) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === valorAntigo) {
            array[i] = valorNovo
        }
    }
    return array;
}

const valores = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
resultado = substituirElemento(valores, 2, 5)
console.log(resultado)