/* Descrição do exercício:

Usando um laço for, crie um programa que calcule o fatorial de um número. 

Descrição: Neste exercício, você precisa criar um programa que calcula o fatorial de um número. 

O fatorial de um número é o produto de todos os números inteiros positivos de 1 até o número. Por exemplo, o fatorial de 5 (representado por 5!) é 1 * 2 * 3 * 4 * 5 = 120.

*/

const inputNumero = document.getElementById('numero')
const btnFatorial = document.querySelector('button.btnFatorial')
const btnNovoFatorial = document.querySelector('button.btnNovoFatorial')
const resposta = document.querySelector('div.resposta')

function calcularFatorial() {
    if (inputNumero.value === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    if (numero <= 0) {
        alert('Não são aceitos números negativos ou iguais a zero.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    let fatorial = 1

    for (let contador = 1; contador <= numero; contador++) {
        fatorial *= contador
    }

    resposta.innerHTML = `<p>${numero}! = ${fatorial}</p>`

    btnFatorial.style.display = 'none'
    btnNovoFatorial.style.display = 'inline-block'
}

function novoFatorial() {
    inputNumero.value = ''
    inputNumero.focus()

    btnFatorial.style.display = 'inline-block'
    btnNovoFatorial.style.display = 'none'

    resposta.innerHTML = ''
}

