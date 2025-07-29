/* Descrição do exercício:

Declare três variáveis e atribua valores numéricos a elas. Use operadores de comparação para comparar os valores entre as variáveis. Imprima os resultados.

*/

const inputNumero1 = document.getElementById('numero1')
const inputNumero2 = document.getElementById('numero2')
const inputNumero3 = document.getElementById('numero3')
const btnComparacao = document.querySelector('button.btnComparacao')
const btnNovaComparacao = document.querySelector('button.btnNovaComparacao')
const resposta = document.querySelector('div.resposta')

function comparar() {
    const numero1Digitado = inputNumero1.value
    const numero1 = Number(numero1Digitado)

    if (numero1Digitado === '') {
        alert('Insira o número 1 antes de comparar.')
        inputNumero1.focus()
        return
    }

    if (isNaN(numero1)) {
        alert('Digite um valor válido antes de comparar.')
        inputNumero1.value =
            inputNumero1.focus()
        return
    }

    const numero2Digitado = inputNumero2.value
    const numero2 = Number(numero2Digitado)

    if (numero2Digitado === '') {
        alert('Insira o número 2 antes de comparar.')
        inputNumero2.focus()
        return
    }

    if (isNaN(numero2)) {
        alert('Digite um valor válido antes de comparar.')
        inputNumero2.value = ''
        inputNumero2.focus()
        return
    }

    const numero3Digitado = inputNumero3.value
    const numero3 = Number(numero3Digitado)

    if (numero3Digitado === '') {
        alert('Insira o número 3 antes de comparar.')
        inputNumero3.focus()
        return
    }

    if (isNaN(numero3)) {
        alert('Digite um valor válido antes de comparar.')
        inputNumero3.value = ''
        inputNumero3.focus()
        return
    }

    let resultado = ''

    if (numero1 > numero2 && numero1 > numero3) {
        resultado = `${numero1} é o MAIOR e ${numero2} e ${numero3} são MENORES.`
    } else if (numero1 < numero2 && numero1 < numero3) {
        resultado = `${numero1} é o MENOR e ${numero2} e ${numero3} são MAIORES.`
    } else if (numero1 === numero2 && numero1 === numero3) {
        resultado = 'Todos são IGUAIS'
    } else if (numero2 > numero1 && numero2 > numero3) {
        resultado = `${numero2} é o MAIOR e ${numero1} e ${numero3} são MENORES.`
    } else if (numero2 < numero1 && numero2 < numero3) {
        resultado = `${numero2} é o MENOR e ${numero1} e ${numero3} são MAIORES.`
    } else if (numero3 > numero1 && numero3 > numero2) {
        resultado = `${numero3} é o MAIOR e ${numero1} e ${numero2} são MENORES.`
    } else {
        resultado = `${numero3} é o MENOR e ${numero1} e ${numero2} são MAIORES.`
    }

    resposta.innerHTML = `<p>${resultado}</p>`

    btnComparacao.style.display = 'none'
    btnNovaComparacao.style.display = 'inline-block'

}

function novaComparacao() {
    inputNumero1.value = ''
    inputNumero2.value = ''
    inputNumero3.value = ''
    inputNumero1.focus()

    btnComparacao.style.display = 'inline-block'
    btnNovaComparacao.style.display = 'none'

    resposta.innerHTML = ''
}


