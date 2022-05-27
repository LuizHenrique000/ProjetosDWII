const anos = ['2012', '2010', '2012', '2022', '2035', '2022', '2035', '2012'];
const anosFiltrados = anos.filter((ano1, ano2) => anos.indexOf(ano1) == ano2);

console.log(anos);
console.log(anosFiltrados);

const anosIguais = (ano) => {
    contador = 0;
    for (let i = 0; i < anos.length; i++) {
        if (ano == anos[i]) {
            contador++;
        }
    }
    return contador
}
console.log(anosIguais(2012))