/* Descrição do exercício:

Escreva uma função que retorne o menor número em um array de números. 

Descrição: Neste exercício, você deve criar uma função que aceita um array de números como argumento e retorna o menor número desse array.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('button.btnAdicionarNumero')
const btnPassarNumeros = document.querySelector('button.btnPassarNumeros')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar a lista.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    resposta.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


function passarNumeros() {
    if (listaNumeros.length === 0) {
        alert('Adicione números à lista antes de verificar.')
        inputNumero.focus()
        return
    }

    verificarLista(listaNumeros)
}


function verificarLista(listaNumerosPassada) {

    let menorNumero = listaNumeros[0]

    for (i = 0; i <= listaNumeros.length; i++) {
        if (listaNumeros[i] < menorNumero) {
            menorNumero = listaNumeros[i]
        }
    }

    resposta.innerHTML += `<p>Menor número = ${menorNumero}</p>`

    inputNumero.disabled = true

    btnAdicionarNumero.style.display = 'none'
    btnPassarNumeros.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}


function novaVerificacao() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    listaNumeros.length = 0

    btnAdicionarNumero.style.display = 'inline-block'
    btnPassarNumeros.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}





