/* Descrição do exercício:

Usando um laço for, imprima os primeiros 10 números triangulares (n*(n+1)/2). 

Descrição: Neste exercício, você deve imprimir os primeiros 10 números triangulares. Um número triangular é obtido através da fórmula n*(n+1)/2, onde n é a posição do número na sequência. 

Por exemplo, os primeiros 5 números triangulares são 1, 3, 6, 10, 15...

*/

const inputQuantidade = document.getElementById('quantidade')
const btnNumerosTriangulares = document.querySelector('button.btnNumerosTriangulares')
const btnNovaContagem = document.querySelector('button.btnNovaContagem')
const resposta = document.querySelector('div.resposta')

function numerosTriangulares() {
    if (inputQuantidade.value === '') {
        alert('Digite uma quantidade para continuar.')
        inputQuantidade.focus()
        return
    }

    const quantidade = Number(inputQuantidade.value)

    if (quantidade <= 0) {
        alert('Digite uma quantidade maior que zero para continuar.')
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return
    }

    let resultado = ''

    for (let contador = 1; contador <= quantidade; contador++) {

        // Basta substituir "n" da fórmula (n*(n+1)/2) por "contador"
        let listaNumerosTriangulares = contador * (contador + 1) / 2

        resultado += `${listaNumerosTriangulares} > `
    }

    resposta.innerHTML = `<p>${resultado} ACABOU!</p>`

    btnNumerosTriangulares.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'
}

function novaContagem() {
    inputQuantidade.value = ''
    inputQuantidade.focus()

    btnNumerosTriangulares.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    resposta.innerHTML = ''
}


