 /* Descrição do exercício:

 Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador. 
 
 Descrição: Neste exercício, você vai simular um jogo de "Pedra, papel e tesoura" contra o computador. Para simplificar, vamos supor que a escolha do usuário é sempre "pedra".

 */

 const inputObjeto = document.getElementById('objeto')
 const btnJogar = document.querySelector('button.btnJogar')
 const btnNovaJogada = document.querySelector('button.btnNovaJogada')
 const resposta = document.querySelector('div.resposta')

 function jogar() {
    if (inputObjeto.value === '') {
        alert('Digite um número para jogar.')
        inputObjeto.focus()
        return
    }

    const jogadaUsuario = Number(inputObjeto.value)

    if (objeto < 1 || objeto > 3) {
        alert('Digite valores entre 1 e 3 para jogar.')
        inputObjeto.value = ''
        inputObjeto.focus()
        return
    }

    const jodadaComputador = 1

    let resultado = ''

    // 1 = Pedra | 2 = Papel | 3 = Tesoura
    if (jogadaUsuario === 1 && jodadaComputador === 3) {
        resultado = 'Você ganhou!'
    } else if (jogadaUsuario === 3 && jodadaComputador === 2) {
        resultado = 'Você ganhou!'
    } else if (jogadaUsuario === 2 && jodadaComputador === 1) {
        resultado = 'Você ganhou!'
    } else if (jogadaUsuario === jodadaComputador) {
        resultado = 'Deu empate. Jogue de novo!'
    } else {
        resultado = 'Você perdeu miserável!'
    }

    resposta.innerHTML = `<p>${resultado} | Computador jogou ${jodadaComputador}</p>`

 }



