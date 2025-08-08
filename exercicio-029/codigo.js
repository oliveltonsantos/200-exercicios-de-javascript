/* Descrição do exercício:

Usando um laço do-while, imprima todos os números pares de 1 a 100.

Descrição: Neste exercício, você deve criar um loop usando a estrutura de repetição do-while que percorra todos os números de 1 a 100 e imprima no console apenas os números pares.

*/

const inputInicial = document.getElementById('inicial')
const inputFinal = document.getElementById('final')
const btnAnalisePares = document.querySelector('button.btnAnalisePares')
const btnNovaAnalise = document.querySelector('button.btnNovaAnalise')
const resposta = document.querySelector('div.resposta')

function analisePares() {
    if (inputInicial.value === '') {
        alert('Digite um valor inicial para continuar.')
        inputInicial.focus()
        return
    }

    if (inputFinal.value === '') {
        alert('Digite um valor final para continuar.')
        inputFinal.focus()
        return
    }

    const inicial = Number(inputInicial.value)
    const final = Number(inputFinal.value)

    if (inicial >= final) {
        alert('O valor inicial não pode ser maior ou igual ao valor final.')
        inputInicial.value = ''
        inputInicial.focus()
        return
    }

    let contador = inicial

    resposta.innerHTML += 'Números pares: '

    do {
        if (contador % 2 === 0) {
            resposta.innerHTML += `${contador} > `
        }
        contador++
    } while (contador <= final)

    resposta.innerHTML += 'ACABOU!'

    btnAnalisePares.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'
}

function novaAnalise() {
    inputInicial.value = ''
    inputFinal.value = ''
    inputInicial.focus()

    btnAnalisePares.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    resposta.innerHTML = ''
}


