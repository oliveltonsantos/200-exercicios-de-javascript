/* Descrição do exercício:

Usando um laço do-while, imprima todos os números ímpares de 1 a 20. 

Descrição: Neste exercício, você deve criar um loop usando a estrutura de repetição do-while que percorra todos os números de 1 a 20 e imprima no console apenas os números ímpares.

*/

const inputInicial = document.getElementById('inicial')
const inputFinal = document.getElementById('final')
const btnContar = document.querySelector('button.btnContar')
const btnNovaContagem = document.querySelector('button.btnNovaContagem')
const resposta = document.querySelector('div.resposta')

function contarImpares() {
    if (inputInicial.value === '') {
        alert('Insira o valor inicial para continuar.')
        inputInicial.focus()
        return
    }

    if (inputFinal.value === '') {
        alert('Insira o valor final para continuar.')
        inputFinal.focus()
        return
    }

    const inicial = Number(inputInicial.value)
    const final = Number(inputFinal.value)

    let contador = inicial

    if (inicial < final) {
        // Contagem crescente
        do {
            if (contador % 2 !== 0) {
                resposta.innerHTML += `${contador} > `
            }
            contador++
        } while (contador <= final)
    } else {
        // Contagem decrescente
        do {
            if (contador % 2 !== 0) {
                resposta.innerHTML += `${contador} > `
            }
            contador--
        } while (contador >= final)
    }

    resposta.innerHTML += 'ACABOU!'

    btnContar.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'

}

function novaContagem() {
    inputInicial.value = ''
    inputFinal.value = ''
    inputInicial.focus()

    btnContar.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    resposta.innerHTML = ''
}


