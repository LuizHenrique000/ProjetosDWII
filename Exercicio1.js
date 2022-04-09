function receberParametros(valorDoBoleto, dias) {
    let jurosDiario = 100 / (0.033 * valorDoBoleto);
    let jurosTotal = jurosDiario * dias;
    let novoValor = valorDoBoleto + jurosTotal;
    return novoValor;
}
console.log(receberParametros(2, 15));
