/* Descrição do exercício:

Escreva uma função que receba um array de números e retorne um novo array com a raiz quadrada de todos os números. 

Descrição: Neste exercício, você deve criar uma função que receba um array de números como argumento e retorne um novo array em que cada número seja a raiz quadrada do número original.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('button.btnAdicionarNumero')
const btnPassarLista = document.querySelector('button.btnPassarLista')
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


function passarLista() {
    if (listaNumeros.length === 0) {
        alert('Adicione números à lista para calcular.')
        inputNumero.focus()
        return
    }

    calculoRaizQuadrada(listaNumeros)
}


function calculoRaizQuadrada(listaNumerosPassada) {

    listaNumerosQuadrado = []

    for (let i = 0; i < listaNumerosPassada.length; i++) {

        // Math.sqrt() cálcula a raiz quadrada de cada número em listaNumerosPassada[i]
        let raiz = Math.sqrt(listaNumerosPassada[i])

        // Adiciona a raiz de cada número ao array listaNumerosQuadrado
        listaNumerosQuadrado.push(raiz)
    }

    resposta.innerHTML += `<p>Lista raiz quadrada: ${listaNumerosQuadrado.join(' > ')}</p>`

    inputNumero.disabled = true

    btnAdicionarNumero.style.display = 'none'
    btnPassarLista.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


function novoCalculo() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnPassarLista.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    listaNumeros.length = 0

    resposta.innerHTML = ''
}