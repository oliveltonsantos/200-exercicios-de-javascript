/* Descrição do exercício:

Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um novo array que contém os resultados de aplicar a função de callback ao valor, na ordem inversa. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um array de funções de callback e um valor como argumentos, e retorne um novo array que contenha os resultados de aplicar cada função de callback ao valor, na ordem inversa.

Observação: Teste com 11205.81 (valor final) e verifique se retorna 10000.00 (valor inicial).

*/

const inputValorFinal = document.getElementById('valorFinal')
const btnProcessarInvestimento = document.querySelector('button.btnProcessarInvestimento')
const btnprocessarNovoInvestimento = document.querySelector('button.btnprocessarNovoInvestimento')
const resposta = document.querySelector('div.resposta')


function processarInvestimento() {
    if (inputValorFinal.value === '') {
        alert('Digite um valor para processar.')
        inputValorFinal.focus()
        return
    }

    const valorFinal = Number(inputValorFinal.value)

    if (valorFinal <= 0) {
        alert('Digite um valor maior que zero para processar.')
        inputValorFinal.value = ''
        inputValorFinal.focus()
        return
    }

    let resultado = reverterAjustesFinanceiros(arrayDeCallbacks, valorFinal)

    resposta.innerHTML = `<p>Valor inicial: R$${resultado.toFixed(2)}</p>`

    inputValorFinal.disabled = true

    btnProcessarInvestimento.style.display = 'none'
    btnprocessarNovoInvestimento.style.display = 'inline-block'
}


// Função de alta ordem
function reverterAjustesFinanceiros(arrayCallbacks, valorPassado) {

    let v = valorPassado

    for (let i = arrayCallbacks.length - 1; i >= 0; i--) {
        v = arrayCallbacks[i](v)
    }

    return v
}


// Array de funções de callback
const arrayDeCallbacks = [desfazerJuros, desfazerImpostos, desfazerAdministracao, desfazerBonus]


// Funções de callback
function desfazerJuros(valorEnviado) {
    // +5%
    return valorEnviado / 1.05
}

function desfazerImpostos(valorEnviado) {
    // -2%
    return valorEnviado / 0.98
}

function desfazerAdministracao(valorEnviado) {
    // -1%
    return valorEnviado / 0.99
}

function desfazerBonus(valorEnviado) {
    // +10%
    return valorEnviado / 1.10
}


// Fazer novo cálculo
function processarNovoInvestimento() {
    inputValorFinal.disabled = false
    inputValorFinal.value = ''
    inputValorFinal.focus()

    btnProcessarInvestimento.style.display = 'inline-block'
    btnprocessarNovoInvestimento.style.display = 'none'

    resposta.innerHTML = ''
}

