/* Descrição do exercício:

Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).

*/

const inputNome = document.getElementById('nome')
const inputNota1 = document.getElementById('nota1')
const inputNota2 = document.getElementById('nota2')
const btnAnalisar = document.querySelector('button.btnAnalisar')
const btnCadastro = document.querySelector('button.btnCadastro')
const resposta = document.querySelector('div.resposta')

function analisarNotas() {
    if (inputNome.value.trim() === '') {
        alert('Digite o nome do aluno(a).')
        inputNome.focus()
        return
    }

    if (inputNota1.value < 0 || inputNota1.value === '') {
        alert('Digite a primeira nota para continuar (o valor não deve ser negativo.)')
        inputNota1.value = ''
        inputNota1.focus()
        return
    }

    if (inputNota2.value < 0 || inputNota2.value === '') {
        alert('Digite a segunda nota para continuar (o valor não deve ser negativo.)')
        inputNota2.value = ''
        inputNota2.focus()
        return
    }

    const nota1 = Number(inputNota1.value)
    const nota2 = Number(inputNota2.value)

    const notaMedia = (nota1 + nota2) / 2

    let resultado = ''

    if (notaMedia >= 7) {
        resultado = 'Aprovado(a)'
    } else {
        resultado = 'Reprovado(a)'
    }

    resposta.innerHTML = `Aluno(a): ${inputNome.value} > Nota média: ${notaMedia} > ${resultado}`

    btnAnalisar.style.display = 'none'
    btnCadastro.style.display = 'inline-block'
}

function novoCadastro() {
    inputNome.value = ''
    inputNota1.value = ''
    inputNota2.value = ''
    inputNome.focus()

    btnAnalisar.style.display = 'inline-block'
    btnCadastro.style.display = 'none'

    resposta.innerHTML = ''

}