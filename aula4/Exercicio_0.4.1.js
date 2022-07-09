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
const notasTotais = alunos
    .map((item) => item.notas)
    .map((itens) => itens.reduce((acc, { nota }) => acc + nota, 0))

console.log(alunos[0])

