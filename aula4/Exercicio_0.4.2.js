const conferencias = [
    {
        nome: 'BrazilJS',
        publico: 20_000,
    },
    {
        nome: 'JSConf UE',
        publico: 10_000,
    },
    {
        nome: 'TDC',
        publico: 3_000,
    },
    {
        nome: 'React Conf 2022',
        publico: 10_000,
    },
]

let numerosAscendentes = conferencias.sort(function (a, b) {
    return a.publico - b.publico
});

console.log(numerosAscendentes);

let numerosDescendentes = conferencias.sort(function (a, b) {
    return b.publico - a.publico;

});

console.log(numerosDescendentes);