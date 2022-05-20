const arquivos = [
    {
        id: 1,
        nome: 'Meu Trabalho v1',
        excluido: false,
    },
    {
        id: 2,
        nome: 'Meu Trabalho v2',
        excluido: false,
    },
    {
        id: 3,
        nome: 'Meu Trabalho v3',
        excluido: false,
    },
    {
        id: 4,
        nome: 'Meu Trabalho v4',
        excluido: true,
    }
]

const inverterValor = arquivos.forEach(myFunction);
function myFunction(arquivos) {
    if (arquivos.excluido === false) {
        arquivos.excluido = true;
    }
    else if (arquivos.excluido === true) {
        arquivos.excluido = false;
    }
}
console.log(arquivos)