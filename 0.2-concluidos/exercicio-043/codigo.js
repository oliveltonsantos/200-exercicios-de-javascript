/* Descrição do exercício:

Usando um laço while, crie um programa que determine se um número é palíndromo ou não (um número é palíndromo se for igual ao seu reverso).

Descrição: Neste exercício, você precisa criar um programa que determina se um número é um palíndromo. 

Um número é considerado um palíndromo se for o mesmo lido de trás para frente. Por exemplo, o número 12321 é um palíndromo.

*/

const inputNumero = document.getElementById('numero')
const btnVerificar = document.querySelector('button.btnVerificar')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function verificarNumero() {
    if (inputNumero.value.trim() === '') {
        alert('Digite um número para continuar.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    if (inputNumero.value < 10) {
        alert('Digite um número com pelo menos dois dígitos.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    const numero = inputNumero.value
    const listaNumeros = numero.split('')

    let indiceEsquerda = 0
    let indiceDireita = listaNumeros.length - 1 // Último índice1 do array
    let numeroPalindromo = true

    while (indiceEsquerda < indiceDireita) {
        if (listaNumeros[indiceEsquerda] !== listaNumeros[indiceDireita]) {
            numeroPalindromo = false
            break
        }
        indiceEsquerda++ // Anda com índice para esquerda
        indiceDireita-- // Anda com índice para direita
    }

    let resultado = ''

    if (numeroPalindromo) {
        resultado = `✅ ${numero} é um palíndromo!`
    } else {
        resultado = `❌ ${numero} não é um palíndromo!`
    }

    resposta.innerHTML = `<p>${resultado}</p>`

    btnVerificar.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}

function novaVerificacao() {
    inputNumero.value = ''
    inputNumero.focus()

    btnVerificar.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}
