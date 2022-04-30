function receberTresParametros(valorDaCompra, convenio, cartaoDaLoja) {
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
    }
}
console.log(receberTresParametros(100, true, true));
