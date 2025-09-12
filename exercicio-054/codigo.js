/* Descrição do exercício:

Escreva uma função que ordene um array de números em ordem decrescente. 

Descrição: Neste exercício, você deve escrever uma função que receba um array de números como argumento e retorne um novo array com os números ordenados em ordem decrescente.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('button.btnAdicionarNumero')
const btnPassarListaNumeros = document.querySelector('button.btnPassarListaNumeros')
const btnNovosNumeros = document.querySelector('button.btnNovosNumeros')
const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    resposta.innerHTML = `Números adicionados: ${listaNumeros.join(' > ')}`

    inputNumero.value = ''
    inputNumero.focus()
}

function passarListaNumeros() {

    if (listaNumeros.length <= 0) {
        alert('Adicione números antes de ordenar.')
        inputNumero.focus()
        return
    }

    ordenarLista(listaNumeros)
}


function ordenarLista(listaNumerosPassados) {

    let listaOrdenada = []

    for (i = listaNumerosPassados.length - 1; i >= 0; i--) {
        listaOrdenada.push(listaNumerosPassados[i])
    }

    resposta.innerHTML += `<p>Ordem decrescente: ${listaOrdenada.join(' > ')}</p>`

    inputNumero.disabled = true

    btnAdicionarNumero.style.display = 'none'
    btnPassarListaNumeros.style.display = 'none'
    btnNovosNumeros.style.display = 'inline-block'
}


function novosNumeros() {

    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnPassarListaNumeros.style.display = 'inline-block'
    btnNovosNumeros.style.display = 'none'

    resposta.innerHTML = ''

    listaNumeros.length = 0
}


