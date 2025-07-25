/* Descrição do exercício:

 Declare duas variáveis chamadas "idade" e "peso", atribua valores a elas e imprima os valores na console.

 */

const inputPeso = document.getElementById("peso");
const inputIdade = document.getElementById("idade");
const btnEnviar = document.querySelector('button.btnEnviar')
const btnNovoValor = document.querySelector('button.btnNovoValor')
const resposta = document.querySelector("div.resposta");

function resultado() {
  const pesoDigitado = inputPeso.value;
  const peso = Number(pesoDigitado);

  if (pesoDigitado === "") {
    alert("Digite seu peso primeiramente.");
    inputPeso.focus();
    return;
  }

  if (peso <= 0 || isNaN(peso)) {
    alert('Digite um valor válido ou maior que zero.')
    inputPeso.value = ''
    inputPeso.focus()
    return
  }

  const idadeDigitada = inputIdade.value
  const idade = Number(idadeDigitada)

  if (idadeDigitada === '') {
    alert('Digite sua idade primeiramente.')
    inputIdade.focus()
    return
  }

  if (idade <= 0 || isNaN(idade)) {
    alert('Digite um valor válido ou uma idade maior que zero.')
    inputIdade.value = ''
    inputIdade.focus()
    return
  }

  btnEnviar.style.display = 'none'
  btnNovoValor.style.display = 'inline-block'

  resposta.innerHTML = `<p>Seu peso é ${peso}KG e idade ${idade} ano(s).</p>`
}


function novoValor() {
  inputPeso.value = ''
  inputIdade.value = ''
  inputPeso.focus()

  btnEnviar.style.display = 'inline-block'
  btnNovoValor.style.display = 'none'
  resposta.innerHTML = ''

}
