/* Descrição do exercício:

Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.

*/

const inputNumero = document.getElementById('numero')
const btnVerificar = document.querySelector('button.btnVerificar')
const btnNovoNumero = document.querySelector('button.btnNovoNumero')
const resposta = document.querySelector('div.resposta')

function verificarNumero() {

    if (inputNumero.value === '') {
        alert('Digite um número antes de verificar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    let resultado = ''

    if (numero > 0) {
        resultado = 'Positivo'
    } else if (numero < 0) {
        resultado = 'Negativo'
    } else {
        resultado = 'Zero'
    }

    resposta.innerHTML = `<p>Número: ${resultado}</p>`

    btnVerificar.style.display = 'none'
    btnNovoNumero.style.display = 'inline-block'

}

function novoNumero() {
    inputNumero.value = ''
    inputNumero.focus()

    btnVerificar.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    resposta.innerHTML = ''
}


