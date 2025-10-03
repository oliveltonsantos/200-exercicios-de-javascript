function aplicarCallbacksComIntervalo(n, callback, valorInicial) {
  let valor = valorInicial;
  let i = 0;
  let intervalId = setInterval(() => {
    if (i < callback.length) {
      valor = callback[i](valor);
      i++;
    } else {
      clearInterval(intervalId);
      console.log(valor);
    }
  }, n);
}

let callback = [num => num * 2, num => num + 1];
let valorInicial = 1;
aplicarCallbacksComIntervalo(2000, callback, valorInicial); // Saída: valor final impresso no console ao final das execuções
