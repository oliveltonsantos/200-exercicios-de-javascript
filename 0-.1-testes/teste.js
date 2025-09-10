function fatorial(n) {
    if (n < 0) {
        return "Fatorial não é definido para números negativos";
    }

    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i; // resultado = resultado * i
    }
    return resultado;
}

// Exemplos de uso:
console.log(fatorial(0)); // 1
console.log(fatorial(1)); // 1
console.log(fatorial(5)); // 120
console.log(fatorial(7)); // 5040
