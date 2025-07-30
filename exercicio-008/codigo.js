/* Descrição do exercício:

Declare uma variável e atribua um valor numérico a ela. Use o operador de incremento para aumentar o valor da variável. Imprima o resultado.

*/

const inputInicio = document.getElementById('inicio')
const inputFinal = document.getElementById('final')
const inputPassos = document.getElementById('passos')
const btnContagem = document.querySelector('button.btnContagem')
const btnNovaContagem = document.querySelector('button.btnNovaContagem')
const resposta = document.querySelector('div.resposta')

function contagem() {
    const inicioDigitado = inputInicio.value
    const inicio = Number(inicioDigitado)

    if (inicioDigitado === '') {
        alert('Digite o valor inicial primeiro.')
        inputInicio.focus()
        return
    }

    if (isNaN(inicio)) {
        alert('Digite um valor válido.')
        inputInicio.value = ''
        inputInicio.focus()
        return
    }

    const finalDigitado = inputFinal.value
    const final = Number(finalDigitado)

    if (finalDigitado === '') {
        alert('Digite o valor final primeiro.')
        inputFinal.focus()
        return
    }

    if (isNaN(final)) {
        alert('Digite um valor válido.')
        inputFinal.value = ''
        inputFinal.focus()
        return
    }

    const passosDigitados = inputPassos.value
    const passos = Number(passosDigitados)

    if (passosDigitados === '') {
        alert('Digite a quantidade de passos primeiro.')
        inputPassos.focus()
        return
    }

    if (isNaN(passos) || passos <= 0) {
        alert('Digite um valor válido ou maior que zero.')
        inputPassos.value = ''
        inputPassos.focus()
        return
    }

    if (inicio < final) {
        // Contagem dos números crescente
        for (let contador = inicio; contador <= final; contador += passos) {
            resposta.innerHTML += `${contador} > `
        }
    } else {
        // Contagem dos números decrescente
        for (let contador = inicio; contador >= final; contador -= passos) {
            resposta.innerHTML += `${contador} > `
        }
    }

    resposta.innerHTML += 'ACABOU!'

    btnContagem.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'

}

function novaContagem() {
    inputInicio.value = ''
    inputFinal.value = ''
    inputPassos.value = ''
    inputInicio.focus()

    btnContagem.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    resposta.innerHTML = ''

}



