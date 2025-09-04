let matriz1 = [[1,2], [3,4]]
let matriz2 = [[5,6], [7,8]]
let soma = []

let i = 0;
do {
    let j = 0;
    soma[i] = [];
    do {
        soma[i][j] = matriz1[i][j] + matriz2[i][j];
        j++;
    } while (j < matriz1[i].length);
    i++;
} while (i < matriz1.length);

console.log(`A soma das matrizes é ${JSON.stringify(soma)}`);
