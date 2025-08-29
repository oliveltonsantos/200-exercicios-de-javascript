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
let linhas = 0
let colunas = 0
let posicaoI = 0 // Linha atual
let posicaoJ = 0 // Coluna atual


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

    // Inicializa a matriz vazia
    for (let i = 0; i < linhas; i++) {
        matrizA[i] = []
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

    // Adiciona o valor atual na matriz
    matrizA[posicaoI][posicaoJ] = Number(inputValor.value)

    posicaoJ++ // Avança para a próxima coluna

    if (posicaoJ > colunas) {
        posicaoJ = 0
        posicaoI++
    }

    if (posicaoI >= linhas) {
        resposta.innerHTML = `<pre>${JSON.stringify(matrizA, null, 2)}</pre>`
        alert("Matriz preenchida!")
    }

    // limpa input
    inputValor.value = ''
    inputValor.focus()








   
}





