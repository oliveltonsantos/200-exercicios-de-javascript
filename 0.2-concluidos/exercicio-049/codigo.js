/* Descrição do exercício:

Escreva uma função que aceite três números como argumentos e retorne o maior deles. 

Descrição:  Neste exercício, você precisa escrever uma função que receba três números como argumentos e retorne o maior desses números.
 
*/

const inputNumero1 = document.getElementById('numero1')
const inputNumero2 = document.getElementById('numero2')
const inputNumero3 = document.getElementById('numero3')
const btnPassarNumeros = document.querySelector('button.btnPassarNumeros')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function passarNumeros() {
    if (inputNumero1.value === '') {
        alert('Digite o número 1 para continuar.')
        inputNumero1.focus()
        return
    } else if (inputNumero2.value === '') {
        alert('Digite o número 2 para continuar.')
        inputNumero2.focus()
        return
    } else if (inputNumero3.value === '') {
        alert('Digite o número 3 para continuar.')
        inputNumero3.focus()
        return
    }

    const numero1 = Number(inputNumero1.value)
    const numero2 = Number(inputNumero2.value)
    const numero3 = Number(inputNumero3.value)

    maiorNumero(numero1, numero2, numero3)
}


function maiorNumero(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        resposta.innerHTML = `<p>Número ${n1} é o maior número.<p>`
    } else if (n2 > n1 && n2 > n3) {
        resposta.innerHTML = `<p>Número ${n2} é o maior número.<p>`
    } else {
        resposta.innerHTML = `<p>Número ${n3} é o maior número.<p>`
    }

    inputNumero1.disabled = true
    inputNumero2.disabled = true
    inputNumero3.disabled = true

    btnPassarNumeros.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}


function novaVerificacao() {
    inputNumero1.disabled = false
    inputNumero2.disabled = false
    inputNumero3.disabled = false

    inputNumero1.value = ''
    inputNumero2.value = ''
    inputNumero3.value = ''
    inputNumero1.focus()

    btnPassarNumeros.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}


