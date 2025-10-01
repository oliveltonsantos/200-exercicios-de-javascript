 /* Descrição do exercício:

Escreva uma função de alta ordem que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, a cada "n" milissegundos. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um número, um array de funções de callback e um valor inicial como argumentos, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, a cada "n" milissegundos. Isso é conhecido como programação assíncrona.

 */

const inputValor = document.getElementById('valor')
const btnChamarCallback = document.querySelector('button.btnChamarCallback')
const btnNovoCalculo = document.querySelector('button.btnNovoCalculo')
const resposta = document.querySelector('div.resposta')

function chamarCallback() {
    if (inputValor.value === '') {
        alert('Digite um valor para calcular.')
        inputValor.focus()
        return
    }

    const investimento = Number(inputValor.value)

    if (investimento <= 0) {
        alert('Digite um valor maior que zero para calcular.')
        inputValor.value = ''
        inputValor.focus()
        return
    }


}


// Função de alta ordem

function executarCallbacks() {

}

// Array de funções callback

let arrayDeCallbacks = [juros, imposto, taxaDeAdministracao, bonus]

// Funções de callback

function juros() {
    // Juros → aumenta 5%
}

function imposto() {
    // imposto → diminui 2%

}

function taxaDeAdministracao() {
    // Taxa de administração → diminui 1%
}

function bonus() {
    // Bônus → aumenta 10%
}