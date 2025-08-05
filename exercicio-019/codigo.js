/* Descrição do exercício:

Escreva um programa que verifica se um número está dentro de um determinado intervalo. 

Descrição:  Neste exercício, você vai criar uma função que recebe três números como argumentos: um número a ser verificado, o limite inferior e o limite superior do intervalo. 

A função deve imprimir se o número está dentro do intervalo ou não.

*/

const inputNumero = document.getElementById('numero')
const inputMinimo = document.getElementById('minimo')
const inputMaximo = document.getElementById('maximo')
const btnVerificacao = document.querySelector('button.btnVerificacao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function varificacao() {
    if (inputNumero.value === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    if (inputMinimo.value === '') {
        alert('Digite o valor mínimo para continuar.')
        inputMinimo.focus()
        return
    }

    if (inputMaximo.value === '') {
        alert('Digite o valor máximo para continuar.')
        inputMaximo.focus()
        return
    }

    const numero = Number(inputNumero.value)
    const valorMinimo = Number(inputMinimo.value)
    const valorMaximo = Number(inputMaximo.value)

    let resultado = ''

    if (numero >= valorMinimo && numero <= valorMaximo) {
        resultado = 'Está dentro do intervalo.'
    } else {
        resultado = 'Não está dentro do intervalo.'
    }

    resposta.innerHTML = `<p>${numero} > ${resultado}</p>`

    btnVerificacao.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'

}

function novaVerificacao() {
    inputNumero.value = ''
    inputMinimo.value = ''
    inputMaximo.value = ''
    inputNumero.focus()

    btnVerificacao.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}