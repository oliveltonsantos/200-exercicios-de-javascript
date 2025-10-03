/* Descrição do exercício:

Escreva uma função de alta ordem que aceite uma função de callback e um array, e retorne um novo array que contém os resultados de aplicar a função de callback a cada elemento do array, sem alterar o array original.

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba uma função de callback e um array como argumentos, e retorne um novo array que contenha os resultados de aplicar a função de callback a cada elemento do array. A função de callback deve ser uma função pura, ou seja, não deve alterar o estado do array original.

*/

const inputTemperatura = document.getElementById('valorCelsius')
const btnAdicionarTemperatura = document.querySelector('button.btnAdicionarTemperatura')
const btnChamarCallback = document.querySelector('button.btnChamarCallback')
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

}


function chamarCallback() {
    if (listaTemperaturas.length <= 0) {
        alert('Adicione temperaturas à lista para converter.')
        inputTemperatura.focus()
        return
    }

    executarCallback(listaTemperaturas)
}


// Função de alta ordem
function executarCallback(listaTemperaturasPassada) {
    converterTemperaturaFahrenheit(listaTemperaturasPassada)
}


// Função de callback
function converterTemperaturaFahrenheit(listaParaConverter) {
    let listaConvertida = []

    for (let i = 0; i < listaParaConverter.length; i++) {
        let novaTemperatura = (listaParaConverter[i] * 1.8) + 32
        listaConvertida.push(novaTemperatura)
    }

    resposta.innerHTML += `<p>Temperaturas convertidas: ${listaConvertida.join(' > ')}</p>`

}