/* Descrição do exercício:

Escreva um programa que verifica a situação de um estudante de acordo com sua média final. 

Descrição: Neste  exercício, você vai criar uma função que recebe a média final de um estudante e verifica sua situação, se aprovado (média igual ou superior a 7), se em recuperação (média entre 5 e 6.9) ou se reprovado (média abaixo de 5).

*/

const inputMedia = document.getElementById('media')
const btnVerificacao = document.querySelector('button.btnVerificacao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function verificarMedia() {
    if (inputMedia.value === '') {
        alert('Insira a nota antes de verificar.')
        inputMedia.focus()
        return
    }

    const notaMedia = Number(inputMedia.value)

    if (notaMedia < 0) {
        alert('Não são aceitas notas com valores negativos.')
        inputMedia.value = ''
        inputMedia.focus()
        return
    }

    let resultado = ''

    if (notaMedia >= 7) {
        resultado = 'APROVADO'
    } else if (notaMedia >= 5 && notaMedia < 6.9) {
        resultado = 'RECUPERAÇÃO'
    } else {
        resultado = 'REPROVADO'
    }

    resposta.innerHTML = `<p>Situação do aluno(a): ${resultado}</p>`

    btnVerificacao.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}

function novaVerificação() {
    inputMedia.value = ''
    inputMedia.focus()

    btnVerificacao.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}


