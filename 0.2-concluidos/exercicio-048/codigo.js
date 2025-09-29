/* Descrição do exercício:

Escreva uma função que aceite um número como argumento e retorne se ele é par ou ímpar. 

Descrição: Neste exercício, você precisa escrever uma função que receba um número como argumento e retorne uma string indicando se o número é par ou ímpar.

*/

const inputNumero = document.getElementById('numero')
const btnPassarNumero = document.querySelector('button.btnPassarNumero')
const btnNovoNumero = document.querySelector('button.btnNovoNumero')
const resposta = document.querySelector('div.resposta')

function passarNumero() {
    if (inputNumero.value.trim() === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    verificarNumero(numero)
}


function verificarNumero(numeroPassado) {
    if (numeroPassado % 2 === 0) {
        resposta.innerHTML = `<p>Número: ${numeroPassado} é PAR.<p>`
    } else {
        resposta.innerHTML = `<p>Número: ${numeroPassado} é ÍMPAR.<p>`
    }

    inputNumero.disabled = true
    btnPassarNumero.style.display = 'none'
    btnNovoNumero.style.display = 'inline-block'
}


function novoNumero() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnPassarNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    resposta.innerHTML = ''
}






