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


    // Verifica se todos os campos estão preenchidos
    for (const input of inputsDados) {

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


    // Objeto da conta
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


    // Aplica o depósito
    contaBancaria.fazerDeposito()


    // Validação antes de sacar
    if (contaBancaria.saque > contaBancaria.saldo) {
        alert('Saldo insuficiente para realizar o saque. Digite outro valor.')
        inputSaque.value = ''
        inputSaque.focus()
        return
    }


    // Apenas faz o saque se o valor for válido
    contaBancaria.fazerSaque()


    resposta.innerHTML = `
        <p><strong>RESUMO DA OPERAÇÃO</strong></p>
        <p>Senhor(a), ${contaBancaria.nome} atualmente na sua conta consta:</p>
        <p>----------------------------------------------------------------</p>
        <p>Depósito: ${contaBancaria.deposito > 0
            ? `R$${contaBancaria.deposito.toFixed(2)}`
            : 'Nenhum depósito foi feito.'
        }</p>
        <p>Saque: ${contaBancaria.saque > 0
            ? `R$${contaBancaria.saque.toFixed(2)}`
            : 'Nenhum saque foi realizado.'
        }</p>
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


