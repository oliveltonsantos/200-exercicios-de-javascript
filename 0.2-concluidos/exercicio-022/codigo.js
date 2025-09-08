/* Descrição do exercício:

Escreva um programa que determina o número de dias em um mês. 

Descrição: Neste exercício, você criará uma função que recebe o número de um mês e imprime o número de dias desse mês.

*/

const inputMes = document.getElementById('mes')
const btnCalculo = document.querySelector('button.btnCalculo')
const btnNovoCalculo = document.querySelector('button.btnNovoCalculo')
const resposta = document.querySelector('div.resposta')

function calcularDias() {
    if (inputMes.value === '') {
        alert('Insira um número para continuar.')
        inputMes.focus()
        return
    }

    const mes = Number(inputMes.value)

    if (mes < 1 || mes > 12) {
        alert('Digite um número entre 1 e 12.')
        inputMes.value = ''
        inputMes.focus()
        return
    }

    let resultado = ''

    if (mes === 1 ||
        mes === 3 ||
        mes === 5 ||
        mes === 7 ||
        mes === 8 ||
        mes === 10 ||
        mes === 12) {
        resultado = '31 dias'
    } else if (
        mes === 4 ||
        mes === 6 ||
        mes === 9 ||
        mes === 11
    ) {
        resultado = '30 dias'
    } else {
        resultado = '28 dias ou 29 se for ano bissexto'
    }

    resposta.innerHTML = `<p>Mês: ${mes} > ${resultado}</p>`

    btnCalculo.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}

function novoCalculo() {
    inputMes.value = ''
    inputMes.focus()

    btnCalculo.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    resposta.innerHTML = ''
}
