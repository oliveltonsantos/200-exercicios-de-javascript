/* Descrição do exercício:

Escreva uma função que retorne o maior número em um array de números. 
 
Descrição: Neste exercício, você deve criar uma função que aceita um array de números como argumento e retorna o maior número desse array.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('button.btnAdicionarNumero')
const btnPassarNumero = document.querySelector('button.btnPassarNumero')
const btnNovaAnalise = document.querySelector('button.btnNovaAnalise')
const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    resposta.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


function passarNumero() {
    if (listaNumeros.length === 0) {
        alert('Adicione números à lista para analisar.')
        inputNumero.focus()
        return
    }

    analisarLista(listaNumeros)
}


function analisarLista(listaNumerosPassados) {

    let maiorNumero = listaNumerosPassados[0]

    for (let i = 0; i < listaNumerosPassados.length; i++) {
        if (listaNumerosPassados[i] > maiorNumero) {
            maiorNumero = listaNumerosPassados[i]
        }
    }

    resposta.innerHTML += `<p>Maior número: ${maiorNumero}</p>`

    inputNumero.disabled = true

    btnAdicionarNumero.style.display = 'none'
    btnPassarNumero.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'
}


function novaAnalise() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnPassarNumero.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    listaNumeros.length = 0

    resposta.innerHTML = ''
}