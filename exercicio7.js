/********************************************************************************
7. Escreva uma função multiplicarMatrizes que receba duas matrizes e retorne a multiplicação delas, se possível. Lembre-se que, para multiplicar matrizes, o número de colunas da primeira deve ser igual ao número de linhas da segunda.
*******************************************************************************/

function multiplicarMatrizes(matriz1, matriz2) {
    let multiMatriz1 = 1

    for(let i = 0; i < matriz1.length; i++) {
        for(let j = 0; j < matriz1.length; j++) {
            multiMatriz1 *= matriz1[i][j]
        }
    }

    let multiMatriz2 = 1

    for(let i = 0; i < matriz2.length; i++) {
        for(let j = 0; j < matriz2.length; j++) {
            multiMatriz2 *= matriz2[i][j]
        }
    }

    return multiMatriz1 * multiMatriz2
}

const matriz1 = [
    [1, 2],
    [3, 4],
]

const matriz2 = [
    [5, 6],
    [7, 8],
]

resultado = multiplicarMatrizes(matriz1, matriz2)
console.log("O resultado da multiplicação das duas matrizes é", resultado)