/* Descrição do exercício:

Crie um objeto "circulo" que possui uma propriedade de raio e dois métodos que calculam a área e a circunferência. 

Descrição: Neste exercício, você precisa criar um objeto que represente um círculo. O círculo deve ter uma propriedade para o raio e dois métodos, um para calcular a área do círculo (pi * raio^2) e outro para calcular a circunferência do círculo (2 * pi * raio).

*/

const inputRaio = document.getElementById('raio')
const btnCalcular = document.querySelector('button.btnCalcular')
const btnNovoCalculo = document.querySelector('button.btnNovoCalculo')
const resposta = document.querySelector('div.resposta')


function calculoCirculo() {
    if (inputRaio.value === '') {
        alert('Digite um valor para calcular.')
        inputRaio.focus()
        return
    }

    const raio = Number(inputRaio.value)
    if (raio <= 0) {
        alert('Digite um valor maior que zero para calcular.')
        inputRaio.value = ''
        inputRaio.focus()
        return
    }

    let circulo = {
        raio: raio,

        // Métodos do objeto
        areaCirculo() {
            return 3.14 * (this.raio ** 2)
        },

        circunferenciaCirculo() {
            return 2 * 3.14 * this.raio
        }
    }

    resposta.innerHTML = `
        <p><strong>RESULTADO:</strong><p>
        <p>Área do círculo: ${circulo.areaCirculo().toFixed(2)} cm</p>
        <p>Circunferência do círculo: ${circulo.circunferenciaCirculo().toFixed(2)} cm</p>
    `

    inputRaio.disabled = true

    btnCalcular.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


function novoCalculo() {
    inputRaio.disabled = false
    inputRaio.value = ''
    inputRaio.focus()

    btnCalcular.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    resposta.innerHTML = ''
}


// Eventos
btnCalcular.addEventListener('click', calculoCirculo)
btnNovoCalculo.addEventListener('click', novoCalculo)



