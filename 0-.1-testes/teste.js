function primosAteN(num) {
  let primos = [];

  for (let i = 2; i <= num; i++) {
    if (isPrimo(i)) {
      primos.push(i);
    }
  }

  return primos;
}

function isPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // se encontrou divisor, não é primo
    }
  }
  return num > 1; // garante que 0 e 1 não sejam considerados primos
}

console.log(primosAteN(15)); // Saída: [2, 3, 5, 7]
