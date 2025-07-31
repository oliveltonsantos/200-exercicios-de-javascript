/* Descrição do exercício:

Escreva um programa que verifica se uma pessoa pode votar com base na idade. 

Descrição: Nesse exercício, você vai criar uma função que recebe a idade de uma pessoa e verifica se ela pode votar. No Brasil, o voto é obrigatório para pessoas entre 18 e 70 anos, facultativo para pessoas com 16 ou 17 anos ou acima de 70. Menores de 16 anos não votam.

*/

const inputIdade = document.getElementById('idade')
const btnVerificar = document.querySelector('button.btnVerificacao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function verificarIdade() {
    if (inputIdade.value === '') {
        alert('Insira primeiro sua idade para fazer a verificação.')
        inputIdade.focus()
        return
    }

    const idade = Number(inputIdade.value)

    if (idade <= 0) {
        alert('Idade igual a zero ou menor não existe. Insira outro valor.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    let resultado = ''

    if (idade < 16) {
        resultado = 'Não precisa votar.'
    } else if (idade >= 18 && idade < 70) {
        resultado = 'Voto é obrigatório.'
    } else {
        resultado = 'Voto facultativo.'
    }

    resposta.innerHTML = `<p>${resultado}</p>`

    btnVerificar.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'

}

function novaVerificacao() {
    inputIdade.value = ''
    inputIdade.focus()

    btnVerificar.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}
