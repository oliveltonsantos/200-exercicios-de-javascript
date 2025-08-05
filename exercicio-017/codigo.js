/* Descrição do exercício:

Escreva um programa que determina se um número é par ou ímpar. 

Descrição: Nesse exercício, você vai criar uma função que recebe um número como argumento e imprime se ele é par ou ímpar.

*/

const inputNumero = document.getElementById('numero')
const btnVerificacao = document.querySelector('button.btnVerificacao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function verificacao() {
    if (inputNumero.value === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    let resultado = ''

    if (numero % 2 === 0) {
        resultado = 'PAR'
    } else {
        resultado = 'ÍMPAR'
    }

    resposta.innerHTML = `<p>Número: ${numero} > ${resultado}</p>`

    btnVerificacao.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}

function novaVerificacao() {
    inputNumero.value = ''
    inputNumero.focus()

    btnVerificacao.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}