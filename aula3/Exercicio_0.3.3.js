const medicos = [
    {
        nome: 'Leticia',
        sobrenome: 'Costa',
        genero: 'feminino',
    },
    {
        nome: 'Adimaldo',
        sobrenome: 'Pinto',
        genero: 'masculino',
    },
    {
        nome: 'Noah',
        sobrenome: 'Lutus',
        genero: 'nao-binario',

    },
];

const nomeCorreto = medicos.map(myFunction);

function myFunction(medicos) {
    if (medicos.genero === 'masculino') {
        return `Dr ${medicos.nome} ${medicos.sobrenome}`
    }
    if (medicos.genero === 'feminino') {
        return `Dr(a) ${medicos.nome} ${medicos.sobrenome}`
    }
    if (medicos.genero === 'nao-binario') {
        return `Dr(e) ${medicos.nome} ${medicos.sobrenome}`
    }
}
console.log(nomeCorreto)