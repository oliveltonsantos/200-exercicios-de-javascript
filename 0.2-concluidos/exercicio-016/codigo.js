/* Descrição do exercício:

Escreva um programa que determina o maior entre três números.

Descrição: Nesse exercício, você irá criar uma função que recebe três números como argumentos e imprime o maior deles.

*/

const inputNumero1 = document.getElementById('numero1')
const inputNumero2 = document.getElementById('numero2')
const inputNumero3 = document.getElementById('numero3')
const btnVerificacao = document.querySelector('button.btnVerificacao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function verificacao() {
    if (inputNumero1.value === '') {
        alert('Insira o primeiro número para continuar.')
        inputNumero1.focus()
        return
    }

    if (inputNumero2.value === '') {
        alert('Insira o segundo número para continuar.')
        inputNumero2.focus()
        return
    }

    if (inputNumero3.value === '') {
        alert('Insira o terceiro número para continuar.')
        inputNumero3.focus()
        return
    }

    const numero1 = Number(inputNumero1.value)
    const numero2 = Number(inputNumero2.value)
    const numero3 = Number(inputNumero3.value)

    let resultado = ''

    if (numero1 === numero2 && numero1 === numero3) {
        resultado = 'Todos valores são iguais.'
    } else if (numero1 >= numero2 && numero1 >= numero3) {
        resultado = `${numero1} é MAIOR.`
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        resultado = `${numero2} é MAIOR.`
    } else {
        resultado = `${numero3} é MAIOR.`
    }

    resposta.innerHTML = `<p>${resultado}</p>`

    btnVerificacao.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'

}


function novaVerificacao() {
    inputNumero1.value = ''
    inputNumero2.value = ''
    inputNumero3.value = ''
    inputNumero1.focus()

    btnVerificacao.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''

}