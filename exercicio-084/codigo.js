/* Descrição do exercício:

Crie um objeto "retangulo" que possui propriedades para altura e largura, e um método para calcular a área. 
 
Descrição: Neste exercício, você precisa criar um objeto que represente um retângulo. O retângulo deve ter propriedades para a altura e a largura. Em seguida, adicione um método ao objeto que calcule a área do retângulo.

*/

const inputLargura = document.getElementById('largura')
const inputAltura = document.getElementById('altura')
const todosInputs = document.querySelectorAll('input.todosInputs')
const btnCalcularArea = document.querySelector('button.btnCalcularArea')
const btnNovoCalculo = document.querySelector('button.btnNovoCalculo')
const resposta = document.querySelector('div.resposta')


function calcularArea() {
    for (const cadaInput of todosInputs) {
        // Verifica se há campos vazios
        if (cadaInput.value === '') {
            alert('Digite os valores em todos os campos abaixo.')
            cadaInput.focus()
            return
        }

        // Verifica se não há valores negativos
        const valor = Number(cadaInput.value)

        if (valor < 0) {
            alert('Não são aceitos valores negativos.')
            cadaInput.value = ''
            cadaInput.focus()
            return
        }
    }


    const largura = Number(inputLargura.value)
    const altura = Number(inputAltura.value)


    let retangulo = {
        largura: largura,
        altura: altura,

        // Mêtodo do objeto
        areaRetangulo() {
            return this.largura * this.altura
        }
    }


    resposta.innerHTML = `<p>Área do retângulo = ${retangulo.areaRetangulo()}</p>`


    // Bloqueia os inputs
    for (const cadaInput of todosInputs) {
        cadaInput.disabled = true
    }


    btnCalcularArea.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


function novoCalculo() {
    for (const cadaInput of todosInputs) {
        cadaInput.disabled = false
        cadaInput.value = ''
    }

    inputAltura.focus()

    resposta.innerHTML = ''

    btnCalcularArea.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'
}


// Eventos
btnCalcularArea.addEventListener('click', calcularArea)
btnNovoCalculo.addEventListener('click', novoCalculo)
