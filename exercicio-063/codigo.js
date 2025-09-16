/* Descrição do exercício:

Escreva uma função que receba um número e retorne um array com todos os números primos até aquele número. 

Descrição: Neste exercício, você deve criar uma função que receba um número como argumento e retorne um array com todos os números primos até aquele número.

*/

const inputNumero = document.getElementById('numero')
const btnPassarNumero = document.querySelector('button.btnPassarNumero')
const btnNovoNumero = document.querySelector('button.btnNovoNumero')
const resposta = document.querySelector('div.resposta')

function passarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    if (numero <= 0) {
        alert('Digite um número maior que zero para prosseguir.')
        inputNumero.value = ''
        inputNumero.focus()
    }

    gerarPrimos(numero)
}


function gerarPrimos(numeroPassado) {

    let listaPrimos = []

    // Primeiro for percorre a lista de números até o número passado
    for (let i = 2; i <= numeroPassado; i++) {
        let primo = true

        // Segundo for faz a validação de cada número da lista
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                primo = false
                break
            }
        }

        if (primo) {
            listaPrimos.push(i)
        }
    }

    resposta.innerHTML = `<p>Lista de primos: ${listaPrimos.join(' > ')}</p>`

    inputNumero.disabled = true

    btnPassarNumero.style.display = 'none'
    btnNovoNumero.style.display = 'inline-block'
}


function novoNumero() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnPassarNumero.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    resposta.innerHTML = ''
}




