/* Descrição do exercício:

Crie um objeto que represente um estudante, com propriedades para o nome, notas de várias matérias e um método para calcular a média das notas.

Descrição: Neste exercício, você deve criar um objeto que represente um estudante. O objeto estudante deve ter propriedades para o nome do estudante e as notas que ele tirou em várias matérias. Em seguida, adicione um método ao objeto que calcule a média das notas do estudante.

*/

const inputAluno = document.getElementById('nome')
const inputIngles = document.getElementById('ingles')
const inputMatematica = document.getElementById('matematica')
const inputHistoria = document.getElementById('historia')
const inputGeografia = document.getElementById('geografia')
const inputFilosofia = document.getElementById('filosofia')
const inputsNotas = document.querySelectorAll('.inputsNotas')
const btnCalcularMediaNotas = document.querySelector('button.btnCalcularMediaNotas')
const btnNovoCalculo = document.querySelector('button.btnNovoCalculo')
const resposta = document.querySelector('.resposta')


function calcularMediaNotas() {

  // Percorre todos os campos das notas
  for (const input of inputsNotas) {

    // Verifica se algum campo não foi preenchido
    if (input.value === '') {
      alert('Por favor, preencha todos os campos antes de continuar.')
      input.focus()
      return
    }

    // Converte o valor de cada input para número
    const valor = Number(input.value)

    if (valor < 0) {
      alert('Notas com valores negativos não são aceitas. Por favor, utilize apenas valores positivos.')
      input.value = ''
      input.focus()
      return
    }

    if (valor > 10) {
      alert('A nota máxima é 10.')
      input.value = ''
      input.focus()
      return
    }
  }

  const nome = inputAluno.value
  const filosofia = Number(inputFilosofia.value)
  const geografia = Number(inputGeografia.value)
  const historia = Number(inputHistoria.value)
  const ingles = Number(inputIngles.value)
  const matematica = Number(inputMatematica.value)

  let estudante = {
    nome: nome,
    filosofia: filosofia,
    geografia: geografia,
    historia: historia,
    ingles: ingles,
    matematica: matematica,

    // Método para cálculo da média das notas
    mediaNotas() {
      return (this.filosofia + this.geografia + this.historia + this.ingles + this.matematica) / 5
    }
  }

  resposta.innerHTML = `<p>${estudante.nome} teve uma média total de ${estudante.mediaNotas().toFixed(2)}</p>`

  inputAluno.disabled = true
  inputFilosofia.disabled = true
  inputGeografia.disabled = true
  inputHistoria.disabled = true
  inputIngles.disabled = true
  inputMatematica.disabled = true

  btnCalcularMediaNotas.style.display = 'none'
  btnNovoCalculo.style.display = 'inline-block'
}


function novoCalculo() {
  inputAluno.disabled = false
  inputFilosofia.disabled = false
  inputGeografia.disabled = false
  inputHistoria.disabled = false
  inputIngles.disabled = false
  inputMatematica.disabled = false

  inputAluno.value = ''
  inputFilosofia.value = ''
  inputGeografia.value = ''
  inputHistoria.value = ''
  inputIngles.value = ''
  inputMatematica.value = ''
  inputAluno.focus()

  btnCalcularMediaNotas.style.display = 'inline-block'
  btnNovoCalculo.style.display = 'none'

  resposta.innerHTML = ''
}


// Eventos
btnCalcularMediaNotas.addEventListener('click', calcularMediaNotas)
btnNovoCalculo.addEventListener('click', novoCalculo)


