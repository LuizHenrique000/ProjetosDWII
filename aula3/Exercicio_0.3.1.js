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
function myFunction(filmes) {
    const objeto = {
        diretores: filmes.diretores,
        lancamento: filmes.lancamento
    };
    return objeto;
}
console.log(tituloEAno);

const arrayComId = filmes.map(myFunction2);
function myFunction2(filmes, index) {
    const objeto = {
        nome: filmes.nome,
        lancamento: filmes.lancamento,
        diretores: filmes.diretores,
        generos: filmes.generos,
        id: index
    };
    return objeto;
}
console.log(arrayComId)