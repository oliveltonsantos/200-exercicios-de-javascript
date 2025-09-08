/* Descrição do exercício:

Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador. 
 
Descrição: Neste exercício, você vai simular um jogo de "Pedra, papel e tesoura" contra o computador. Para simplificar, vamos supor que a escolha do usuário é sempre "pedra".

*/

const inputObjeto = document.getElementById('objeto')
const btnJogar = document.querySelector('button.btnJogar')
const btnNovaJogada = document.querySelector('button.btnNovaJogada')
const resposta = document.querySelector('div.resposta')

function jogar() {

    const objetos = ['pedra', 'papel', 'tesoura']

    const jogadaUsuario = inputObjeto.value.trim().toLowerCase()

    if (jogadaUsuario === '') {
        alert('Digite um objeto para jogar.')
        inputObjeto.focus()
        return
    }

    // o "includes" verifica se o array possui o valor digitado
    if (!objetos.includes(jogadaUsuario)) {
        alert('Digite apenas: pedra, papel ou tesoura.')
        inputObjeto.value = ''
        inputObjeto.focus()
        return
    }

    let resultado = ''
    let jogadaComputador = ''

    do {
        jogadaComputador = objetos[Math.floor(Math.random() * objetos.length)]

        if (jogadaUsuario === jogadaComputador) {
            resultado = 'Empate!'
        } else if (
            (jogadaUsuario === 'pedra' && jogadaComputador === 'tesoura') ||
            (jogadaUsuario === 'papel' && jogadaComputador === 'pedra') ||
            (jogadaUsuario === 'tesoura' && jogadaComputador === 'papel')
        ) {
            resultado = 'Você ganhou!'
        } else {
            resultado = 'Você perdeu miserável!'
        }
    } while (resultado === 'Empate!')

    resposta.innerHTML = `<p>${resultado} | Computador jogou <strong>${jogadaComputador}</strong></p>`

    btnJogar.style.display = 'none'
    btnNovaJogada.style.display = 'inline-block'

}

function novaJogada() {
    inputObjeto.value = ''
    inputObjeto.focus()

    btnJogar.style.display = 'inline-block'
    btnNovaJogada.style.display = 'none'

    resposta.innerHTML = ''
}