/* Descrição do exercício:

Escreva uma função que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um número, um array de funções de callback e um valor inicial como argumentos, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado.

*/

const inputAnos = document.getElementById('anos')
const inputHabitantes = document.getElementById('habitantes')
const btnCallback = document.querySelector('button.btnCallback')
const btnNovaSimulacao = document.querySelector('button.btnNovaSimulacao')
const resposta = document.querySelector('div.resposta')

function chamarCallback() {
    if (inputHabitantes.value === '') {
        alert('Digite a quantidade de habitantes para continuar.')
        inputHabitantes.focus()
        return
    }

    let habitantes = Number(inputHabitantes.value)

    if (habitantes <= 0) {
        alert('Não são aceitos valores menores que zero no campo "HABITANTES".')
        inputHabitantes.value = ''
        inputHabitantes.focus()
        return
    }

    if (inputAnos.value === '') {
        alert('Digite quantos anos para fazer a simulação.')
        inputAnos.focus()
        return
    }

    let anos = Number(inputAnos.value)

    if (anos <= 0) {
        alert('Não são aceitos valores menores que zero no campo "ANOS".')
        inputAnos.value = ''
        inputAnos.focus()
        return
    }

    // Chamada da função de alta ordem
    let historicoPopulacional = aplicarCallback(anos, habitantes, arrayCallbacks)

    resposta.innerHTML = historicoPopulacional.join('')

    inputAnos.disabled = true
    inputHabitantes.disabled = true

    btnCallback.style.display = 'none'
    btnNovaSimulacao.style.display = 'inline-block'
}


// Função de alta ordem
function aplicarCallback(anosPassado, habitantesIniciais, arrayCallbacks) {
    let resultado = []

    let habitantes = habitantesIniciais

    for (let i = 0; i < anosPassado; i++) {
        arrayCallbacks.forEach(callback => {
            habitantes = callback(habitantes)
        })
        resultado.push(`<p>Ano ${i + 1}: ${habitantes.toFixed(0)} habitantes.</p>`)
    }

    return resultado
}


// Array de funções de callback
const arrayCallbacks = [crescimentoPopulacao, taxaDeMortalidade]


// Funções de callback
function crescimentoPopulacao(numeroHabitantes) {
    return ((numeroHabitantes * 10) / 100) + numeroHabitantes
}

function taxaDeMortalidade(numeroHabitantes) {
    return numeroHabitantes - ((numeroHabitantes * 2) / 100)
}


function novaSimulacao() {

    inputAnos.disabled = false
    inputHabitantes.disabled = false

    inputAnos.value = ''
    inputHabitantes.value = ''
    inputAnos.focus()

    btnCallback.style.display = 'inline-block'
    btnNovaSimulacao.style.display = 'none'

    resposta.innerHTML = ''
}