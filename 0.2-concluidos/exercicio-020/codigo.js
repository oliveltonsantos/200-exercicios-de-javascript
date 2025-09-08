/* Descrição do exercício:

Escreva um programa que imprime uma classificação baseada na nota de um aluno. 
 
Descrição: Neste exercício, você vai criar uma função que recebe uma nota de um aluno como argumento e imprime uma classificação com base nessa nota:

Nota >= 90 - Classificação A
Nota >= 80 - Classificação B
Nota >= 70 - Classificação C
Nota >= 60 - Classificação D 
Notas menores que 60 - Classificação F

*/

const inputNota = document.getElementById('nota')
const btnVerificacao = document.querySelector('button.btnVerificacao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function verificacao() {
    if (inputNota.value === '') {
        alert('Digite uma nota para continuar.')
        inputNota.focus()
        return
    }

    const nota = Number(inputNota.value)

    if (nota < 0) {
        alert('Não são aceitas notas com valores menores que zero.')
        inputNota.value = ''
        inputNota.focus()
        return
    }

    let classificacao = ''

    if (nota >= 90) {
        classificacao = 'Classificação A'
    } else if (nota >= 80) {
        classificacao = 'Classificação B'
    } else if (nota >= 70) {
        classificacao = 'Classificação C'
    } else if (nota >= 60) {
        classificacao = 'Classificação D'
    } else {
        classificacao = 'Classificação F'
    }

    resposta.innerHTML = `<p>Nota: ${nota} > ${classificacao}</p>`

    btnVerificacao.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'

}

function novaVerificacao() {
    inputNota.value = ''
    inputNota.focus()

    btnVerificacao.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}