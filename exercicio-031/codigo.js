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

    const numero = Number(inputNumero.value)

    if (numero <= 0 || numero > 100) {
        alert('Digite um número entre 1 e 100.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    let contador = 0

    let listaNumeros = []

    for (let contador = 1; contador <= 100; contador++) {
        listaNumeros.push(contador)
        resposta.innerHTML = `Lista: ${listaNumeros.join(' > ')}`
    }

    



}