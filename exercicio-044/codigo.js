/* Descrição do exercício:

Usando um laço do-while, crie um programa que imprima a soma de duas matrizes. 

Descrição: Neste exercício, você deve criar um programa que soma duas matrizes. 

As matrizes são listas bidimensionais de números. A soma de duas matrizes é obtida somando os elementos correspondentes de cada matriz.

*/

const inputLinhas = document.getElementById('linhas')
const inputColunas = document.getElementById('colunas')
const btnquantidadeLinhasColunas = document.querySelector('button.btnquantidadeLinhasColunas')
const tela1 = document.querySelectorAll('.tela1')
const tela2 = document.querySelectorAll('.tela2')
const inputValor = document.getElementById('valor')
const resposta = document.querySelector('div.resposta')

// Matriz com escopo global
let matrizA = []
let matrixB = []


let linhas = 0
let colunas = 0
let posicaoI = 0 // Linha atual
let posicaoJ = 0 // Coluna atual
let preenchendoMatriz = 'A' // Controle de qual matriz está sendo preenchida


function quantidadeLinhasColunas() {
    if (inputLinhas.value === '') {
        alert('Digite a quantidade de linhas para continuar.')
        inputLinhas.focus()
        return
    }

    if (inputColunas.value === '') {
        alert('Digite a quantidade de colunas para continuar.')
        inputColunas.focus()
        return
    }

    if (inputLinhas.value !== inputColunas.value) {
        alert('Para somar valores em uma matriz é necessário que o número de linhas e colunas sejam iguais.')
        inputLinhas.focus()
        return
    }

    linhas = Number(inputLinhas.value)
    colunas = Number(inputColunas.value)

    // Inicializa a matriz A e matriz B vazias
    for (let i = 0; i < linhas; i++) {
        matrizA[i] = []
        matrixB[i] = []
    }

    // Esconde os elementos da primeira tela
    tela1.forEach(parteDaTela1 => {
        parteDaTela1.style.display = 'none'
    })

    // Mostra os elementos da segunda tela
    tela2.forEach(parteDaTela2 => {
        parteDaTela2.style.display = 'inline-block'
    })

}


function adicionarValor() {
    if (inputValor.value === '') {
        alert('Digite um valor para adicionar à matriz.')
        inputValor.focus()
        return
    }

    let valor = Number(inputValor.value)

    // Adiciona o valor na matriz A e depois matriz B
    if (preenchendoMatriz === 'A') {
        matrizA[posicaoI][posicaoJ] = valor
    } else {
        matrixB[posicaoI][posicaoJ] = valor
    }

    posicaoJ++ // Avança para a próxima coluna

    if (posicaoJ >= colunas) {
        posicaoJ = 0
        posicaoI++
    }

    if (posicaoI >= linhas) {
        if (preenchendoMatriz === 'A') {
            alert('Matriz A foi preenchida! Agora preencha a matriz B.')

            // Reseta as posições e troca para Matriz B
            posicaoI = 0
            posicaoJ = 0
            preenchendoMatriz = 'B'

        } else {
            alert('Matriz B preenchida!')
            resposta.innerHTML = 'CERTO'
        }
    }

    // limpa input
    inputValor.value = ''
    inputValor.focus()

}




