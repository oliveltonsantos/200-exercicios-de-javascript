 /* Descrição do exercício:

 Escreva uma função que aceite uma string como argumento e retorne a string invertida. 
 
 Descrição: Neste exercício, você precisa escrever uma função que receba uma string como argumento e retorne a string com seus caracteres na ordem inversa.

 */

 const inputTexto = document.getElementById('texto')
 const btnPassarTexto = document.querySelector('button.btnPassarTexto')
 const btnNovoTexto = document.querySelector('button.btnNovoTexto')
 const resposta = document.querySelector('div.resposta')

 function passarTexto() {
    if (inputTexto.value.trim() === '') {
        alert('Digite uma palavra ou frase para continuar.')
        inputTexto.focus()
        return
    }

    const texto = inputTexto.value

    inverterTexto(texto)

 }


 function inverterTexto(textoPassado) {


    for (let i = 0; i < textoPassado.lenght; i++) {
        let textoInvertido = textoPassado[i] - 1
       
    }

     resposta.innerHTML = `Teste: ${textoInvertido}`

    





 }