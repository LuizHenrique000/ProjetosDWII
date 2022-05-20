const filmes = [
    {
        nome: 'O Senhor do Aneis: A Sociedade do Anel',
        lancamento: 2002,
        diretores: ['Peter Jackson'],
        generos: ['Fantasia', 'Aventura'],
    },
    {
        nome: 'Harry Potter e a Pedra Filosofal',
        lancamento: 2001,
        diretores: ['Chris Columbus'],
        generos: ['Fantasia'],
    },
    {
        nome: 'Matrix',
        lancamento: 1999,
        diretores: ['Lana Wachowski', 'Lilly Wachowski'],
        generos: ['Ação', 'Ficção Cientifica'],
    }
]
const tituloEAno = filmes.map(myFunction);

function myFunction(filme) {
    const objeto = {
        nomes: filme.nome,
        lancamento: filme.lancamento
    };
    return objeto;
}
console.log(tituloEAno);

const arrayComId = filmes.map(myFunction2);

function myFunction2(filme, index) {
    const objeto = {
        ...filme,
        id: index
    };
    return objeto;
}
console.log(arrayComId);