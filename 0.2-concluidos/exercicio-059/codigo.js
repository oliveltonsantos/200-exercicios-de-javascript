/* Descrição do exercício:

Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados. 

Descrição: Neste exercício, você deve criar uma função que receba um array de números como argumento e retorne um novo array em que cada número seja duplicado.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('button.btnAdicionarNumero')
const btnPassarNumeros = document.querySelector('button.btnPassarNumeros')
const btnNovaDuplicacao = document.querySelector('button.btnNovaDuplicacao')
const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar à lista.')
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
        alert('Adicione números à lista antes de duplicar.')
        inputNumero.focus()
        return
    }

    duplicarNumeros(listaNumeros)
}


function duplicarNumeros(listaNumerosPassados) {

    let listaDuplicada = []

    for (let i = 0; i < listaNumerosPassados.length; i++) {
        let numeroDuplicado = listaNumerosPassados[i] * 2
        listaDuplicada.push(numeroDuplicado)
    }

    resposta.innerHTML += `<p>Lista duplicada: ${listaDuplicada.join(' > ')}</p>`

    inputNumero.disabled = true

    btnAdicionarNumero.style.display = 'none'
    btnPassarNumeros.style.display = 'none'
    btnNovaDuplicacao.style.display = 'inline-block'
}


function novaDuplicacao() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnPassarNumeros.style.display = 'inline-block'
    btnNovaDuplicacao.style.display = 'none'

    listaNumeros.length = 0

    resposta.innerHTML = ''
}





