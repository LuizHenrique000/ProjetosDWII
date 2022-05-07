const tarefas = [
    {
        titulo: 'Passear com o cachorro',
        concluida: false,
    },
    {
        titulo: 'Comprar leite',
        concluida: false,
    },
    {
        titulo: 'Lavar a louça',
        concluida: true,
    }
]

function retornaTarefaNaoConcluida(concluida) {
    tar = concluida;
    return tar == true;
}
retornaTarefaNaoConcluida(concluida);