let matriz1 = [[1,2], [3,4]]        // Cria a 1ª matriz (2x2).
let matriz2 = [[5,6], [7,8]]        // Cria a 2ª matriz (2x2), com mesmas dimensões.
let soma = []                       // Matriz-resultado, começa vazia.

let i = 0;                          // Índice da linha atual.
do {                                // Início do laço externo (por linhas). Executa ao menos 1 vez.
    let j = 0;                      // Índice da coluna atual (reinicia a cada nova linha).
    soma[i] = [];                   // Garante que a linha i da matriz soma exista (cria um array vazio).

    do {                            // Início do laço interno (por colunas).
        soma[i][j] = matriz1[i][j] + matriz2[i][j]; // Soma elemento a elemento e guarda em soma[i][j].
        j++;                        // Avança para a próxima coluna.
    } while (j < matriz1[i].length); // Continua enquanto houver colunas nesta linha.

    i++;                            // Fim da linha: avança para a próxima linha.
} while (i < matriz1.length);       // Continua enquanto houver linhas.

console.log(`A soma das matrizes é ${JSON.stringify(soma)}`); 
// Imprime a matriz 'soma' como JSON dentro de um template string.
