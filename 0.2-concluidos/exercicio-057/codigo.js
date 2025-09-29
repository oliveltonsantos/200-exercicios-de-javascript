/* Descrição do exercício:

Escreva uma função que retorne a soma de todos os números ímpares em um array de números. 
 
Descrição: Neste exercício, você deve criar uma função que aceita um array de números como argumento e retorna a soma de todos os números ímpares desse array.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('button.btnAdicionarNumero')
const btnPassarNumeros = document.querySelector('button.btnPassarNumeros')
const btnNovaSoma = document.querySelector('button.btnNovaSoma')
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


function passarNumeros() {
    if (listaNumeros.length < 2) {
        alert('Adicione pelo menos dois números para somar.')
        inputNumero.focus()
        return
    }

    somarImpares(listaNumeros)
}


function somarImpares(listaNumerosPassados) {

    let soma = 0

    for (let i = 0; i < listaNumerosPassados.length; i++) {
        if (listaNumerosPassados[i] % 2 !== 0) {
            soma += listaNumerosPassados[i]
        }
    }

    resposta.innerHTML = `<p>Soma dos ímpares = ${soma}</p>`

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

    listaNumeros.length = 0

    resposta.innerHTML = ''
}




