/* Descrição do exercício:

Usando um laço while, imprima a soma dos quadrados dos primeiros 10 números naturais.

Descrição: Neste exercício, você deve calcular e imprimir a soma dos quadrados dos primeiros 10 números naturais. 

Os números naturais são os números positivos começando em 1, então os primeiros 10 números naturais são 1, 2, 3, ..., 10, e os seus quadrados são 1, 4, 9, ..., 100.

*/

const inputInicial = document.getElementById('inicial')
const inputFinal = document.getElementById('final')
const btnSomarQuadrados = document.querySelector('button.btnSomarQuadrados')
const btnNovaSoma = document.querySelector('button.btnNovaSoma')
const resposta = document.querySelector('div.resposta')

function somarQuadrados() {
    if (inputInicial.value === '') {
        alert('Digite um número inicial para continuar.')
        inputInicial.focus()
        return
    }

    const inicial = Number(inputInicial.value)

    if (inicial <= 0) {
        alert('Não são aceitos números negativos ou menores que zero.')
        inputInicial.value = ''
        inputInicial.focus()
        return
    }

    if (inputFinal.value === '') {
        alert('Digite um número final para continuar.')
        inputFinal.focus()
        return
    }

    const final = Number(inputFinal.value)

    if (final <= 0 || final <= inicial) {
        alert('Não são aceitos números negativos, menores que zero ou menores que o valor inicial.')
        inputFinal.value = ''
        inputFinal.focus()
        return
    }

    let numero = inicial
    let soma = 0

    while (numero <= final) {
        let numeroQuadrado = numero ** 2
        soma += numeroQuadrado
        numero++
    }

    resposta.innerHTML += `<p><strong>Total: ${soma}</strong></p>`

    btnSomarQuadrados.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'
}

function novaSoma() {
    inputInicial.value = ''
    inputFinal.value = ''
    inputInicial.focus()

    btnSomarQuadrados.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    resposta.innerHTML = ''
}




