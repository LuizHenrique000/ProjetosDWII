const tarefas = [
    { titulo: "Passear com o cachorro", concluida: false, dias: 10 },
    { titulo: "Comprar leite", concluida: false, dias: 5 },
    { titulo: "Lavar louça", concluida: true, dias: 60 },
];

function retornaTarefasConcluidas() {
    tarefasConcluidas = [];
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].concluida == true) {
            tarefasConcluidas = tarefas[i].titulo;
            console.log(tarefasConcluidas);
        }
    }
}

function retornaTarefasNaoConcluidas() {
    let contador = 0;
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].concluida == false) {
            contador++;
        }
    }
    console.log(contador);
}

function verificaTarefasConcluidasAbaixoDe30Dias() {
    let contador = 0;
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].concluida == true && tarefas[i].dias <= 30) {
            contador++;
        }
    }
    console.log("Existem " + contador + " tarefas concluidas em 30 dias");
}

retornaTarefasConcluidas();
retornaTarefasNaoConcluidas();
verificaTarefasConcluidasAbaixoDe30Dias();
