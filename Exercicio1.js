function receberParametros(valorDoBoleto, dias) {
    let jurosDiario = (0.00033 * valorDoBoleto) / 100;
    let jurosTotal = jurosDiario * dias;
    let novoValor = valorDoBoleto + jurosTotal;
    return novoValor;
}
console.log(receberParametros(2, 15));
