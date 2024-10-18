/********************************************************************************
4. Crie uma função ehPalindromo que receba uma string e verifique se ela é um palíndromo (ou seja, se pode ser lida da mesma maneira de trás para frente).
*******************************************************************************/ 

function ehPalindromo(string) {
    let nome = string.toLowerCase('')
    if(nome === nome.split('').reverse().join('')) {
        console.log(nome, "É um palíndromo")
    } else {
        console.log(nome, "Não é um palíndromo")
    }
}

let nome = "Racecar"
ehPalindromo(nome)