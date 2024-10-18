/********************************************************************************
3. Crie uma função separarParesImpares que receba um array de números e retorne um objeto com dois arrays: um contendo os números pares e outro contendo os números ímpares.
*******************************************************************************/ 

function separarParesImpares(array) {
    let pares = []
    let impares = []

    for(i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 == 0) {
            pares += numeros[i]
            pares += " "
        } else {
            impares += numeros[i]
            impares += " "
        }
    }

    console.log("Pares:", pares )
    console.log("Ímpares:", impares)
}    

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
separarParesImpares(numeros)