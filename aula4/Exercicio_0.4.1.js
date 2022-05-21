const alunos = [
    {
        nome: 'Mathias',
        notas: [
            { cadeira: 'DW2', nota: 10 },
            { cadeira: 'BD2', nota: 7 },
        ],
    },
    {
        nome: 'Luiza',
        notas: [
            { cadeira: 'DW2', nota: 8 },
            { cadeira: 'BD2', nota: 8 },
        ],
    },
    {
        nome: 'Pedro',
        notas: [
            { cadeira: 'DW2', nota: 10 },
            { cadeira: 'BD2', nota: 10 },
        ],
    }
]


const mediaGeral = alunos.map(myFunction);
function myFunction(alunos) {
    const media = alunos.notas.reduce((acumulador, proximoValor) => { acumulador + proximoValor }, 0)
    alunos.mediaGeral = media;

}
console.log(alunos)
// A mediaGeral está retornando undefined :(