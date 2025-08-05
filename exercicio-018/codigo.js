/* Descrição do exercício:

Escreva um programa que verifica se uma pessoa pode dirigir com base na idade. 

Descrição:  Nesse exercício, você vai criar uma função que recebe a idade de uma pessoa e verifica se ela pode dirigir. 

No Brasil, apenas pessoas com mais de 18 anos podem tirar carteira de habilitação.

*/

const inputIdade = document.getElementById('idade')
const btnVerificacao = document.querySelector('button.btnVerificacao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function verificacao() {
    if (inputIdade.value === '') {
        alert('Digite sua idade para continuar.')
        inputIdade.focus()
        return
    }

    const idade = Number(inputIdade.value)

    if (idade <= 0) {
        alert('Digite uma idade maior que zero.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    let resultado = ''

    if (idade >= 18) {
        resultado = 'Você pode dirigir.'
    } else {
        resultado = `Você não pode dirigir. Ainda falta(m) ${18 - idade} ano(s).`
    }

    resposta.innerHTML = `<p>${resultado}</p>`

    btnVerificacao.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'

}

function novaVerificacao() {
    inputIdade.value = ''
    inputIdade.focus()

    btnVerificacao.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''

}


