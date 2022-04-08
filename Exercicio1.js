function receberParametros(valorDoBoleto, dias) {
    novoValor = valorDoBoleto / (0.033 * dias);
    return novoValor;
}
console.log(receberParametros(2, 15));
