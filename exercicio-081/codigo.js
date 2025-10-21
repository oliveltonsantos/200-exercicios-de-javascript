/* Descrição do exercício:

Crie um objeto representando uma conta bancária, que possui uma propriedade de saldo e métodos para depósito e saque. 

Descrição: Neste exercício, você precisa criar um objeto que represente uma conta bancária. Este objeto deve ter uma propriedade para o saldo e métodos para realizar um depósito e um saque.

*/

const inputNome = document.getElementById('nome')
const inputSaldo = document.getElementById('saldo')
const inputDeposito = document.getElementById('deposito')
const inputSaque = document.getElementById('saque')
const inputsDados = document.querySelectorAll('input.inputDados')
const btnRealizarOperacao = document.querySelector('button.btnRealizarOperacao')
const btnNovaOperacao = document.querySelector('button.btnNovaOperacao')
const resposta = document.querySelector('div.resposta')


function realizarOperacao() {
    const nome = inputNome.value
    const saldo = Number(inputSaldo.value)
    const deposito = Number(inputDeposito.value)
    const saque = Number(inputSaque.value)

    // Pecorre todos os campos do formulário
    for (const input of inputsDados) {

        // Verifica se existe algum campo não preenchido
        if (input.value === '') {
            alert('Preencha todos os campos para realizar a operação.')
            input.focus()
            return
        }

        const valor = Number(input.value)

        if (valor < 0) {
            alert('Não são aceitos valores negativos.')
            input.value = ''
            input.focus()
            return
        }
    }

    // Objeto
    let contaBancaria = {
        nome: nome,
        saldo: saldo,
        deposito: deposito,
        saque: saque,

        // Métodos do objeto
        fazerDeposito() {
            this.saldo += this.deposito
        },

        fazerSaque() {
            this.saldo -= this.saque
        },

        saldoAtual() {
            return this.saldo
        }
    }

    // Chama as funções de deposito e saque
    contaBancaria.fazerDeposito()
    contaBancaria.fazerSaque()

    resposta.innerHTML = `
        <p><strong>RESUMO DA OPERAÇÃO</strong></p>
        <p>Senhor(a), ${contaBancaria.nome} atualmente na sua conta consta:</p>
        <p>----------------------------------------------------------------</p>
        <p>Depósito: R$${contaBancaria.deposito.toFixed(2)}</p>
        <p>Saque: R$${contaBancaria.saque.toFixed(2)}</p>
        <p>----------------------------------------------------------------</p>
        <p><strong>Saldo atual: R$${contaBancaria.saldoAtual().toFixed(2)}</strong></p>
    `

    inputNome.disabled = true
    inputSaldo.disabled = true
    inputDeposito.disabled = true
    inputSaque.disabled = true

    btnRealizarOperacao.style.display = 'none'
    btnNovaOperacao.style.display = 'inline-block'
}


function novaOperacao() {
    inputNome.disabled = false
    inputSaldo.disabled = false
    inputDeposito.disabled = false
    inputSaque.disabled = false

    inputNome.value = ''
    inputSaldo.value = ''
    inputDeposito.value = ''
    inputSaque.value = ''
    inputNome.focus()

    btnRealizarOperacao.style.display = 'inline-block'
    btnNovaOperacao.style.display = 'none'

    resposta.innerHTML = ''
}


// Eventos
btnRealizarOperacao.addEventListener('click', realizarOperacao)
btnNovaOperacao.addEventListener('click', novaOperacao)


