const anos = ['2012', '2010', '2020', '2022', '2035', '2045'];
function anoMenor() {
    anosMenores = [];
    for (let i = 0; i < anos.length; i++) {
        if (anos[i] < 2021) {
            anosMenores[i] = [anos[i]];
            console.log(anosMenores[i]);
        }

    }

}
function anoMaiorOuIgual() {
    contador = 0;
    for (let i = 0; i < anos.length; i++) {
        if (anos[i] >= 2021) {
            contador++;
        }

    }
    console.log(contador)
    return contador;
}
function acharDecimo(decimo) {
    novoArray = [];
    for (let i = 0; i < anos.length; i++) {
        if (anos[i] % decimo == 0) {
            novoArray[i] = [anos[i]];
            console.log(novoArray[i]);
        }


    }
}
anoMenor();
anoMaiorOuIgual();
acharDecimo(10);
