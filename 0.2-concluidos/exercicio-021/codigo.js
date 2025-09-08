/* Descrição do exercício:

Escreva um programa que determina a estação do ano com base no mês. 

Descrição: Neste exercício, você criará uma função que recebe um número de 1 a 12 (representando os meses de janeiro a dezembro) e imprimirá a estação do ano correspondente.

*/

const inputMes = document.getElementById('mes')
const btnVerificacao = document.querySelector('button.btnVerificacao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function verificacao() {
    if (inputMes.value === '') {
        alert('Digite um número para continuar.')
        inputMes.focus()
        return
    }

    const mes = Number(inputMes.value)

    if (mes < 1 || mes > 12) {
        alert('Digite um número entre 1 e 12.')
        inputMes.value = ''
        inputMes.focus()
        return
    }

    let resultado = ''

    if (mes >= 12 || mes <= 2) {
        resultado = 'Verão'
    } else if (mes >= 3 && mes <= 5) {
        resultado = 'Outono'
    } else if (mes >= 6 && mes <= 8) {
        resultado = 'Inverno'
    } else {
        resultado = 'Primavera'
    }

    resposta.innerHTML = `<p>Mês: ${mes} > ${resultado}</p>`

    btnVerificacao.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'

}

function novaVerificacao() {
    inputMes.value = ''
    inputMes.focus()

    btnVerificacao.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}