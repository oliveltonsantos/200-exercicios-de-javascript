/* Descrição do exercício:

Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci. 

Descrição: Neste exercício, você precisa imprimir os primeiros 10 números da sequência de Fibonacci. A sequência de Fibonacci é uma sequência de números onde cada número subsequente é a soma dos dois anteriores. Ela começa assim: 0, 1, 1, 2, 3, 5, 8, 13...

*/

const inputQuantidade = document.getElementById('quantidade')
const btnGerarFibonacci = document.querySelector('button.btnGerarFibonacci')
const btnNovaSequencia = document.querySelector('button.btnNovaSequencia')
const resposta = document.querySelector('div.resposta')

function gerarFibonacci() {
    if (inputQuantidade.value === '') {
        alert('Digite um número para a quantidade.')
        inputQuantidade.focus()
        return
    }

    const quantidade = Number(inputQuantidade.value)

    if (quantidade <= 0) {
        alert('Digite um número maior que zero para continuar.')
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return
    }

    let numero1 = 1
    let numero2 = 1
    let resultado = 'Sequência de Fibonacci: '

    if (quantidade === 1) {
        resultado = `Sequência de Fibonacci: ${numero1} > `
    } else if (quantidade === 2) {
        resultado = `Sequência de Fibonacci: ${numero1} > ${numero2} > `
    } else {
        resultado = `Sequência de Fibonacci: ${numero1} > ${numero2} > `

        for (let contador = 3; contador <= quantidade; contador++) {
            let novoNumero = numero1 + numero2
            resultado += `${novoNumero} > `
            numero1 = numero2
            numero2 = novoNumero
        }
    }

    resposta.innerHTML = `<p>${resultado} ACABOU!</p>`

    btnGerarFibonacci.style.display = 'none'
    btnNovaSequencia.style.display = 'inline-block'

}

function novaSequencia() {
    inputQuantidade.value = ''
    inputQuantidade.focus()

    btnGerarFibonacci.style.display = 'inline-block'
    btnNovaSequencia.style.display = 'none'

    resposta.innerHTML = ''
}

