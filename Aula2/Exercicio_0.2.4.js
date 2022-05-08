const listaArquivos = {
    arquivos: [
        {
            nomeArquivo: 'aula1', tipoArquivo: 'pasta', pasta: [{
                nomeArquivo: 'Exercicio_0.1.1', tipoArquivo: 'dado',
            },
            { nomeArquivo: 'Exercicio_0.1.2', tipoArquivo: 'dado' }]
        },
        {
            nomeArquivo: 'aula2', tipoArquivo: 'pasta', pasta: [{
                nomeArquivo: 'Exercicio_0.2.1', tipoArquivo: 'dado',
            },
            {
                nomeArquivo: 'Exercicio_0.2.2', tipoArquivo: 'dado'
            }]
        }

    ]
}
console.log(listaArquivos.arquivos[0], listaArquivos.arquivos[1])