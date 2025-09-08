/* Descrição do exercício:

Declare duas variáveis chamadas "nome" e "sobrenome", atribua o seu nome e sobrenome a elas. 

Concatene-as em uma terceira variável chamada "nomeCompleto" e imprima.

*/

const inputNome = document.getElementById('nome')
const inputSobrenome = document.getElementById('sobrenome')
const btnEnviar = document.querySelector('button.btnEnviar')
const btnNovoNome = document.querySelector('button.btnNovoNome')
const resposta = document.querySelector('div.resposta')

function exibirNome() {
    const nome = inputNome.value
    const sobrenome = inputSobrenome.value

    if (nome === '' || sobrenome === '') {
        alert('Insira primeiro seu nome e sobrenome.')
        return
    }

    const nomeCompleto = nome + " " + sobrenome

    resposta.innerHTML = `<p>Seu nome completo é: ${nomeCompleto}<p>`

    btnEnviar.style.display = 'none'
    btnNovoNome.style.display = 'inline-block'
}

function novoNome() {
    inputNome.value = ''
    inputSobrenome.value = ''
    inputNome.focus()

    btnEnviar.style.display = 'inline-block'
    btnNovoNome.style.display = 'none'

    resposta.innerHTML = ''
}



