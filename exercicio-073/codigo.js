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

    // Chamada da função de alta ordem
    executarCallbacks(investimento, arrayDeCallbacks)
}


// Função de alta ordem
function executarCallbacks(investimentoInicial, arrayCallbacks, intervalo = 2000) {
    let resultado = investimentoInicial
    let i = 0

    resposta.innerHTML = `<p>Valor inicial: R$${resultado.toFixed(2)}</p>`

    // Intervalo para aplicar as funções uma por uma
    let intervaloId = setInterval(() => {
        if (i < arrayCallbacks.length) {
            const callback = arrayDeCallbacks[i]
            resultado = callback(resultado)

            // "callback.name" retorna uma string com o nome da função que foi passada como callback
            resposta.innerHTML += `<p>Após ${callback.name}: R$${resultado.toFixed(2)}</p>`

            i++
        } else {
            // Quando chegar no final do array de callbacks, para o intervalo
            clearInterval(intervaloId)

            resposta.innerHTML += `<p><strong>Valor final: R$${resultado.toFixed(2)}</strong></p>`

            inputValor.disabled = true
            btnChamarCallback.style.display = 'none'
            btnNovoCalculo.style.display = 'inline-block'
        }
    }, intervalo)
}


// Array de funções callback
let arrayDeCallbacks = [juros, imposto, taxaDeAdministracao, bonus]


// Funções de callback
function juros(valorInvestimento) {
    // Juros → aumenta 5%
    return valorInvestimento + ((valorInvestimento * 5) / 100)
}

function imposto(valorInvestimento) {
    // imposto → diminui 2%
    return valorInvestimento - ((valorInvestimento * 2) / 100)

}

function taxaDeAdministracao(valorInvestimento) {
    // Taxa de administração → diminui 1%
    return valorInvestimento - ((valorInvestimento * 1) / 100)
}

function bonus(valorInvestimento) {
    // Bônus → aumenta 10%
    return valorInvestimento + ((valorInvestimento * 10) / 100)
}


// Reseta tudo para fazer um novo cálculo
function novoCalculo() {
    inputValor.disabled = false
    inputValor.value = ''
    inputValor.focus()

    btnChamarCallback.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    resposta.innerHTML = ''
}