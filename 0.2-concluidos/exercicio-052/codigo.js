/* Descrição do exercício:

Escreva uma função que calcule o n-ésimo número de Fibonacci. 

Descrição: A sequência de Fibonacci começa com os números 0 e 1, e cada número subsequente é a soma dos dois números anteriores. 

Neste exercício, você deve escrever uma função que retorne o n-ésimo número da sequência de Fibonacci.

*/

const inputPosicao = document.getElementById('posicao')
const btnPassarPosicao = document.querySelector('button.btnPassarPosicao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function passarPosicao() {
    if (inputPosicao.value === '') {
        alert('Digite um número para prosseguir.')
        inputPosicao.focus()
        return
    }

    const posicao = Number(inputPosicao.value)

    verificarPosicao(posicao)

}


function verificarPosicao(posicaoPassada) {

    let termo1 = 0
    let termo2 = 1

    let listaFibonacci = [0, 1,]

    for (let i = 2; i <= posicaoPassada; i++) {
        let termo3 = termo1 + termo2
        listaFibonacci.push(termo3)
        termo1 = termo2
        termo2 = termo3
    }

    const numeroNaPosicao = listaFibonacci[posicaoPassada]

    resposta.innerHTML = `<p>Posição <strong>${posicaoPassada}</strong> = número <strong>${numeroNaPosicao}</strong></p>`

    btnPassarPosicao.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'

}


function novaVerificacao() {
    inputPosicao.value = ''
    inputPosicao.focus()

    btnPassarPosicao.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}
