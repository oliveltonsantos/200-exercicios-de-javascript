/* Descrição do exercício:

Usando um laço for, imprima todos os números primos de 1 a 100.

Descrição: Neste exercício, você precisa percorrer todos os números de 1 a 100 e imprimir apenas aqueles que são primos. Lembre-se, um número primo é um número natural maior do que 1 que não tem divisores positivos outros que 1 e ele mesmo.

*/

const inputInicial = document.getElementById('inicial')
const inputFinal = document.getElementById('final')
const btnContarPrimos = document.querySelector('button.btnContarPrimos')
const btnNovaContagem = document.querySelector('button.btnNovaContagem')
const resposta = document.querySelector('div.resposta')

function contarPrimos() {
    if (inputInicial.value === '') {
        alert('Digite o número inicial para continuar.')
        inputInicial.focus()
        return
    }

    if (inputFinal.value === '') {
        alert('Digite o número final para continuar.')
        inputFinal.focus()
        return
    }

    const inicial = Number(inputInicial.value)
    const final = Number(inputFinal.value)

    for (let numero = inicial; numero <= final; numero++) {

        /* 
            O continue é uma instrução de controle que pula imediatamente para a próxima iteração do loop, ignorando todo o código que vem depois dele na iteração atual. 
            Se o "numero" for menor que 2 (ou seja, 0 ou 1), não precisamos nem testar se é primo, porque já sabemos que não é.
            Então o "continue" faz o loop pular direto para o próximo número, sem executar o resto do código da verificação de primalidade.
        */

        if (numero < 2) continue

        let ePrimo = true

        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                ePrimo = false
                break
            }
        }

        if (ePrimo) {
            resposta.innerHTML += `${numero} > `
        }
    }

    resposta.innerHTML += 'ACABOU!'

    btnContarPrimos.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'
}

function novaContagem() {
    inputInicial.value = ''
    inputFinal.value = ''
    inputInicial.focus()

    btnContarPrimos.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    resposta.innerHTML = ''
}

