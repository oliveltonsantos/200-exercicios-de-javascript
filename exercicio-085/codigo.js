/* Descrição do exercício:

Crie um objeto "quadrado" que herda as propriedades do objeto "retangulo" e substitua o método para calcular a área. 

Descrição: Neste exercício, você precisa criar um objeto que represente um quadrado. Este objeto deve herdar as propriedades do objeto retangulo criado no exercício anterior. Em seguida, substitua o método para calcular a área para que utilize apenas uma das dimensões (já que a altura e a largura de um quadrado são iguais).

*/

const inputLargura = document.getElementById('largura')
const inputAltura = document.getElementById('altura')
const btnCalcularArea = document.querySelector('button.btnCalcularArea')
const btnNovoCalculo = document.querySelector('button.btnNovoCalculo')
const resposta = document.querySelector('div.resposta')


// Classe mãe 
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura
        this.altura = altura
    }

    area() {
        return this.largura * this.altura
    }
}


// Classe filha que herda do Retangulo
class Quadrado extends Retangulo {
    constructor(lado) {
        // chama o constructor da classe mãe (retângulo)
        super(lado, lado)
    }

    // Sobrescreve mêtodo area() da classe mãe (retângulo)
    area() {
        return this.largura * this.largura
    }
}


function calcularArea() {

    const largura = Number(inputLargura.value)
    const altura = Number(inputAltura.value)

    if (inputLargura.value === '') {
        alert('Digite o valor da largura para calcular.')
        inputLargura.focus()
        return
    }

    if (largura < 0) {
        alert('Não são aceitos valores negativos para a largura.')
        inputLargura.value = ''
        inputLargura.focus()
        return
    }

    if (inputAltura.value === '') {
        alert('Digite o valor da altura para calcular.')
        inputAltura.focus()
        return
    }

    if (altura < 0) {
        alert('Não são aceitos valores negativos para a altura.')
        inputAltura.value = ''
        inputAltura.focus()
        return
    }


    // Cria os objetos a partir da classes
    const retangulo = new Retangulo(largura, altura)
    const quadrado = new Quadrado(largura)


    resposta.innerHTML = `
        <p>Área retângulo = ${retangulo.area()}</p>
        <p>Área quadrado = ${quadrado.area()}</p>
    `


    inputLargura.disabled = true
    inputAltura.disabled = true


    btnCalcularArea.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


function novoCalculo() {
    inputLargura.disabled = false
    inputAltura.disabled = false

    inputLargura.value = ''
    inputAltura.value = ''
    inputLargura.focus()

    btnCalcularArea.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    resposta.innerHTML = ''
}


// Eventos
btnCalcularArea.addEventListener('click', calcularArea)
btnNovoCalculo.addEventListener('click', novoCalculo)



