 /* Descrição do exercício:

Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um novo array que contém os resultados de aplicar a função de callback ao valor, na ordem inversa. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um array de funções de callback e um valor como argumentos, e retorne um novo array que contenha os resultados de aplicar cada função de callback ao valor, na ordem inversa.

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

    resposta.innerHTML = `<p>Valor final: ${resultado}</p>`

}



// Função de alta ordem
function reverterAjustesFinanceiros(arrayPassado, valorPassado) {

    for (let i = 0; i < arrayPassado.length; i++) {
        arrayPassado.forEach(array => {
            array[i] = valorPassado
        })
    }

}


// Array de funções de callback

let arrayDeCallbacks = [juros, impostos, administracao, bonus]


// Funções de callback

function juros(valorEnviado) {
    // +5%
    return valorEnviado + ((valorEnviado * 5) / 100)
}

function impostos(valorEnviado) {
    // -2%
    return valorEnviado - ((valorEnviado * 2) / 100)
}

function administracao(valorEnviado) {
    // -1%
    return valorEnviado - ((valorEnviado * 1) / 100)
}

function bonus(valorEnviado) {
    // +10%
    return valorEnviado + ((valorEnviado * 10) / 100)
}



