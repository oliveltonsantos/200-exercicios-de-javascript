/* Descrição do exercício:

Escreva um programa que verifica as cores de um semafáro. 
 
Descrição: Neste exercício, você deve criar uma função que recebe uma cor, e imprime no console o que essa cor representa, o console deve imprimir uma mensagem específica para cores que não existem em um semáforo.

*/

const inputCor = document.getElementById('cor')
const btnVerificacao = document.querySelector('button.btnVerificacao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function verificacao() {
    if (inputCor.value === '') {
        alert('Insira o nome de uma cor para continuar.')
        inputCor.focus()
        return
    }

    const nomeCor = inputCor.value

    let resultado = ''

    if (nomeCor === 'verde' || nomeCor === 'VERDE') {
        resultado = 'Pode atravessar a rua.'
    } else if (nomeCor === 'amarelo' || nomeCor === 'AMARELO') {
        resultado = 'Preste atenção antes de atravessar.'
    } else if (nomeCor === 'vermelho' || nomeCor === 'VERMELHO') {
        resultado = 'Não atravesse a rua.'
    } else {
        resultado = 'Essa cor não está presente em um semafáro.'
    }

    resposta.innerHTML = `<p>${nomeCor} > ${resultado}</p>`

    btnVerificacao.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'

}

function novaVerificacao() {
    inputCor.value = ''
    inputCor.focus()

    btnVerificacao.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}




