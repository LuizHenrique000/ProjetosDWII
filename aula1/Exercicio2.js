function receberQuatroParametros(valorDaCompra, convenio, cartaoDaLoja, primeiraCompra) {
    if (cartaoDaLoja == true && convenio == true) {
        desconto = (valorDaCompra / 100) * 15;
        novoValor = valorDaCompra - desconto;
        return novoValor;
    } else if (cartaoDaLoja == true || convenio == true) {
        desconto = (valorDaCompra / 100) * 10;
        novoValor = valorDaCompra - desconto;
        return novoValor;
    } else if (cartaoDaLoja == false || convenio == false) {
        return valorDaCompra;
    } else if (primeiraCompra == true) {
        desconto = (valorDaCompra / 100) * 5;
        return novoValor = valorDaCompra - desconto
    }
}

console.log(receberQuatroParametros(100, true, true, false))