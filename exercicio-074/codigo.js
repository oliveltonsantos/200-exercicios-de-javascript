/* Descrição do exercício:

Escreva uma função de alta ordem que aceite uma função de callback e um array, e retorne um novo array que contém os resultados de aplicar a função de callback a cada elemento do array, sem alterar o array original.

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba uma função de callback e um array como argumentos, e retorne um novo array que contenha os resultados de aplicar a função de callback a cada elemento do array. A função de callback deve ser uma função pura, ou seja, não deve alterar o estado do array original.

*/

const inputTemperatura = document.getElementById('valorCelsius')
const btnAdicionarTemperatura = document.querySelector('button.btnAdicionarTemperatura')
const btnIniciarConversao = document.querySelector('button.btnIniciarConversao')
const btnNovaConversao = document.querySelector('button.btnNovaConversao')
const resposta = document.querySelector('div.resposta')

let listaTemperaturas = []

function adicionarTemperatura() {
    if (inputTemperatura.value === '') {
        alert('Digite uma temperatura para adicionar à lista.')
        inputTemperatura.focus()
        return
    }

    const temperaturaCelsius = inputTemperatura.value

    listaTemperaturas.push(temperaturaCelsius)
    resposta.innerHTML = `<p>Temperaturas adicionadas: ${listaTemperaturas.join(' > ')}</p>`

    inputTemperatura.value = ''
    inputTemperatura.focus()
}


function iniciarConversao() {
    if (listaTemperaturas.length <= 0) {
        alert('Adicione temperaturas à lista para converter.')
        inputTemperatura.focus()
        return
    }

    // Chama função de alta ordem
    let listaConvertida = executarCallback(listaTemperaturas, converterTemperaturaFahrenheit)

    resposta.innerHTML += `<p>Temperaturas convertidas: ${listaConvertida.join(' > ')}</p>`

    inputTemperatura.disabled = true

    btnAdicionarTemperatura.style.display = 'none'
    btnIniciarConversao.style.display = 'none'
    btnNovaConversao.style.display = 'inline-block'
}


// Função de alta ordem
function executarCallback(listaTemperaturasPassada, callback) {
    return callback(listaTemperaturasPassada)
}


// Função de callback pura
function converterTemperaturaFahrenheit(listaParaConverter) {
    return listaParaConverter.map(cadaTemperatura => (cadaTemperatura * 1.8) + 32)
}


function novaConversao() {
    listaTemperaturas.length = 0

    inputTemperatura.disabled = false
    inputTemperatura.value = ''
    inputTemperatura.focus()

    btnAdicionarTemperatura.style.display = 'inline-block'
    btnIniciarConversao.style.display = 'inline-block'
    btnNovaConversao.style.display = 'none'

    resposta.innerHTML = ''
}