/* Descrição do exercício:

Escreva uma função que receba uma string e retorne o número de palavras na string. 

Descrição: Neste exercício, você deve criar uma função que receba uma string como argumento e retorne o número de palavras na string.

*/

const inputFrase = document.getElementById('frase')
const btnPassarFrase = document.querySelector('button.btnPassarFrase')
const btnNovaContagem = document.querySelector('button.btnNovaContagem')
const resposta = document.querySelector('div.resposta')

function passarFrase() {
    if (inputFrase.value.trim() === '') {
        alert('Digite uma frase para continuar.')
        inputFrase.focus()
        return
    }

    const frase = inputFrase.value

    contarPalavras(frase)
}


function contarPalavras(frasePassada) {

    let numeroPalavras = frasePassada.split(' ')

    resposta.innerHTML = `<p>Número de palavras: ${numeroPalavras.length}</p>`

    inputFrase.disabled = true

    btnPassarFrase.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'
}


function novaContagem() {
    inputFrase.disabled = false
    inputFrase.value = ''
    inputFrase.focus()

    btnPassarFrase.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    resposta.innerHTML = ''
}