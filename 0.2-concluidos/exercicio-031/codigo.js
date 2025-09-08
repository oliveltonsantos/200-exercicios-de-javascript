/* Descrição do exercício:

Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária. 

Descrição: Neste exercício, você vai simular um jogo onde o usuário "pensa" em um número de 1 a 100 e o programa deve adivinhar o número usando o método de busca binária. Para simplificar, vamos supor que o número pensado pelo usuário é 50.

*/

const inputNumero = document.getElementById('numero')
const btnAdivinhar = document.querySelector('button.btnAdivinhar')
const btnNovoNumero = document.querySelector('button.btnNovoNumero')
const resposta = document.querySelector('div.resposta')

function adivinharNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    const numeroEscolhido = Number(inputNumero.value)

    if (numeroEscolhido <= 0 || numeroEscolhido > 100) {
        alert('Digite um número entre 1 e 100.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    // Cria uma lista de 1 a 100
    let listaNumeros = []
    for (let contador = 1; contador <= 100; contador++) {
        listaNumeros.push(contador)
    }

    // Recebe resultado da busca binária
    let resultado = buscaBinaria(listaNumeros, numeroEscolhido)

    // Mostra a resposta na tela
    if (resultado !== -1) {
        resposta.innerHTML += `<p>${numeroEscolhido} está na posição ${resultado}</p>`
    } else {
        resposta.innerHTML += `<p>${numeroEscolhido} não foi encontrado.</p>`
    }

    btnAdivinhar.style.display = 'none'
    btnNovoNumero.style.display = 'inline-block'
}

function buscaBinaria(lista, numero) {
    let inicio = 0
    let fim = lista.length - 1

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2)

        if (lista[meio] === numero) {
            return meio // Encontrou o número
        }

        if (lista[meio] < numero) {
            inicio = meio + 1 // Segue para o lado direito da lista
        } else {
            fim = meio - 1 // Segue para o lado esquerdo da lista
        }
    }

    return -1 // Retorna número não encontrado

}

function novoNumero() {
    inputNumero.value = ''
    inputNumero.focus()

    btnAdivinhar.style.display = 'inline-block'
    btnNovoNumero.style.display = 'none'

    resposta.innerHTML = ''
}