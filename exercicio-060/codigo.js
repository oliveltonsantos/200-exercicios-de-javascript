/* Descrição do exercício:

Exercício 60: Escreva uma função que receba um array de números e retorne um novo array com todos os números ao quadrado.

Descrição: Neste exercício, você deve criar uma função que receba um array de números como argumento e retorne um novo array em que cada número seja elevado ao quadrado.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('button.btnAdicionarNumero')
const btnPassarNumeros = document.querySelector('button.btnPassarNumeros')
const btnNovoCalculo = document.querySelector('button.btnNovoCalculo')
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
        alert('Adicione números à lista para calcular.')
        inputNumero.focus()
        return
    }

    calculoAoQuadrado(listaNumeros)
}


function calculoAoQuadrado(listaNumerosPassados) {

    let listaNumerosQuadrados = []

    for (let i = 0; i < listaNumerosPassados.length; i++) {
        let numeroQuadrado = listaNumerosPassados[i] ** 2
        listaNumerosQuadrados.push(numeroQuadrado)
    }

    resposta.innerHTML += `Lista ao quadrado: ${listaNumerosQuadrados.join(' > ')}`

    inputNumero.disabled = true

    btnAdicionarNumero.style.display = 'none'
    btnPassarNumeros.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


function novoCalculo() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnPassarNumeros.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    listaNumeros.length = 0

    resposta.innerHTML = ''
}



