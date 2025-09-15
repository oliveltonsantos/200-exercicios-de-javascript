/* Descrição do exercício:

Escreva uma função que retorne a soma de todos os números pares em um array de números. 

Descrição: Neste exercício, você deve criar uma função que aceita um array de números como argumento e retorna a soma de todos os números pares desse array.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('button.btnAdicionarNumero')
const btnPassarNumeros = document.querySelector('button.btnPassarNumeros')
const btnNovaSoma = document.querySelector('button.btnNovaSoma')
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
    if (listaNumeros.length < 2) {
        alert('Adicione pelo menos 2 números à lista para somar.')
        inputNumero.focus()
        return
    }

    somarPares(listaNumeros)
}


function somarPares(listaNumerosPassados) {

    let contador = 0
    let soma = 0

    while (contador < listaNumerosPassados.length) {
        if (listaNumerosPassados[contador] % 2 === 0) {
            soma += listaNumerosPassados[contador]
        }
        contador++
    }

    resposta.innerHTML += `<p>Soma dos pares: ${soma}</p>`

    inputNumero.disabled = true

    btnAdicionarNumero.style.display = 'none'
    btnPassarNumeros.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'
}


function novaSoma() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnPassarNumeros.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    listaNumeros.length = ''

    resposta.innerHTML = ''
}




