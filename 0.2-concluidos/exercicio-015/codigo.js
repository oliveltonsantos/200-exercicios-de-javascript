/* Descrição do exercício:

Escreva um programa que verifica se uma palavra é um palíndromo. 

Descrição: Um palíndromo é uma palavra que tem a propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita. Nesse exercício, você irá criar uma função que recebe uma palavra como argumento e verifica se ela é um palíndromo.

*/

const inputPalavra = document.getElementById('palavra')
const btnVerificacao = document.querySelector('button.btnVerificacao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function verificacao() {
    if (inputPalavra.value.trim() === '') {
        alert('Insira uma palavra para continuar.')
        inputPalavra.focus()
        return
    }

    let palavra = inputPalavra.value

    let resultado = 'É palíndromo'

    for (let contador = 0; contador < palavra.length / 2; contador++) {
        if (palavra[contador] !== palavra[palavra.length - 1 - contador]) {
            resultado = 'Não é palíndromo'
            break
        }
    }

    resposta.innerHTML = `<p>Palavra: ${palavra} > ${resultado}</p>`

    btnVerificacao.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'

}

function novaVerificacao() {
    inputPalavra.value = ''
    inputPalavra.focus()

    btnVerificacao.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}