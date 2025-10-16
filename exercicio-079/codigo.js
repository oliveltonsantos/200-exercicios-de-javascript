/* Descrição do exercício:

Crie um objeto que represente um carro, com propriedades para a marca, modelo, ano e velocidade atual, e os seguintes métodos: acelerar, frear e obter velocidade atual. 

Descrição: Neste exercício, você deve criar um objeto que represente um carro. O carro deve ter propriedades para marca, modelo, ano e velocidade atual. Em seguida, adicione os seguintes métodos ao objeto: um método que aumenta a velocidade atual, um método que diminui a velocidade atual e um método que retorna a velocidade atual.

*/

const inputMarca = document.getElementById('marca')
const inputModelo = document.getElementById('modelo')
const inputAno = document.getElementById('ano')
const inputVelocidadeAtual = document.getElementById('velocidadeAtual')
const btnSimularVelocidade = document.querySelector('button.btnSimularVelocidade')
const btnNovaSimulacao = document.querySelector('button.btnNovaSimulacao')
const resposta = document.querySelector('div.resposta')

function simularVelocidade() {

    const marca = inputMarca.value
    const modelo = inputModelo.value
    const ano = Number(inputAno.value)
    const velocidadeAtual = Number(inputVelocidadeAtual.value)

    // Validações dos inputs
    if (inputMarca.value.trim() === '') {
        alert('Digite a marca para simular.')
        inputMarca.focus()
        return
    }

    if (inputModelo.value.trim() === '') {
        alert('Digite o modelo para simular.')
        inputModelo.focus()
        return
    }

    if (inputAno.value === '') {
        alert('Digite o ano para simular.')
        inputAno.focus()
        return
    }

    if (ano <= 0) {
        alert('Digite um ano válido para simular.')
        inputAno.value = ''
        inputAno.focus()
        return
    }

    if (inputVelocidadeAtual.value === '') {
        alert('Digite a velocidade para simular.')
        inputVelocidadeAtual.focus()
        return
    }

    if (velocidadeAtual <= 0) {
        alert('Digite uma velocidade maior que zero.')
        inputVelocidadeAtual.value = ''
        inputVelocidadeAtual.focus()
        return
    }

    let dadosDoCarro = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        velocidadeAtual: velocidadeAtual,

        // Métodos do objeto
        aumentarVelocidade50Km() {
            this.velocidadeAtual += 50
        },

        reduzirVelocidade20Km() {
            this.velocidadeAtual -= 20
        },

        velocidadeFinal() {
            return this.velocidadeAtual
        }
    }

    // Chama as funções de aumentar e reduzir velocidade
    dadosDoCarro.aumentarVelocidade50Km()
    dadosDoCarro.reduzirVelocidade20Km()

    resposta.innerHTML = `
        <p><strong>Resultado da simulação da velocidade: </strong></p>
        <p>Velocidade final: ${dadosDoCarro.velocidadeFinal()} KM/H</p>
    `

    inputMarca.disabled = true
    inputModelo.disabled = true
    inputAno.disabled = true
    inputVelocidadeAtual.disabled = true

    btnSimularVelocidade.style.display = 'none'
    btnNovaSimulacao.style.display = 'inline-block'
}


function novaSimulacao() {
    inputMarca.disabled = false
    inputModelo.disabled = false
    inputAno.disabled = false
    inputVelocidadeAtual.disabled = false

    inputMarca.value = ''
    inputModelo.value = ''
    inputAno.value = ''
    inputVelocidadeAtual.value = ''
    inputMarca.focus()

    btnSimularVelocidade.style.display = 'inline-block'
    btnNovaSimulacao.style.display = 'none'

    resposta.innerHTML = ''
}




