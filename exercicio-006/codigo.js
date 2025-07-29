/* Descrição do exercício:

Declare duas variáveis e atribua valores booleanos a elas. Use os operadores lógicos AND, OR e NOT para realizar operações lógicas entre as variáveis. Imprima os resultados.

Observação: os resultados precisam ser conferidos no CONSOLE do navegador.

*/

let bool1 = true
let bool2 = false

// O valor de bool1 e bool2 são VERDADEIROS? | Resposta: false |Explicação: apenas bool1 é verdadeiro, logo a condição não foi satisfeita.
console.log('AND:', bool1 && bool2)

// Valor de bool1 ou bool2 são verdadeiros? | Resposta: true | Explicação: bool1 é VERDADEIRO mas bool2 é FALSO, neste caso se apenas um valor for VERDADEIRO a condição já é satisfeita.
console.log('OR:', bool1 || bool2)

// Valor de bool1 NÃO É VERDADEIRO? | Resposta: false | Explicação: neste caso a resposta é FALSA pois o valor de bool1 é TRUE (verdadeiro).
console.log('NOT:', !bool1) 