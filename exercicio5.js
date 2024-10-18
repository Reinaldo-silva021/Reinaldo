/********************************************************************************
5. Escreva uma função somaMatriz que receba uma matriz (array 2D) de números e retorne a soma de todos os elementos da matriz.
*******************************************************************************/

function somaMatriz(array) {
    let soma = 0

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz.length; j++) {
            soma += matriz[i][j]
        }
    }
    return soma
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

resultado = somaMatriz(matriz)
console.log("A soma de todos os valores da matriz é", resultado)