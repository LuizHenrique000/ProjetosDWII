const tarefas = [
    { titulo: "Passear com o cachorro", concluida: false, dias: 10 },
    { titulo: "Comprar leite", concluida: false, dias: 5 },
    { titulo: "Lavar louça", concluida: true, dias: 60 },
];

const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida);

const numeroTarefasNaoConcluidas = tarefas.filter((tarefa) => !tarefa.concluida).length;

const verificaTarefasAbaixo30Dias = tarefas.filter((tarefa) => tarefa.concluida && tarefa.dias <= 30);

console.log(tarefasConcluidas);
console.log(numeroTarefasNaoConcluidas);
console.log(verificaTarefasAbaixo30Dias);