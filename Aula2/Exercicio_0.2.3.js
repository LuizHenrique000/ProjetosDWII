const gerenciadorTarefas = {
    tarefas: [
        { dataConclusao: "01/05/2022", descricaoTarefa: "Lavar a louça", concluido: "a fazer" },
        { dataConclusao: "05/07/2022", descricaoTarefa: "Mudar móveis de lugar", concluido: "feito" },
        { dataConclusao: "12/05/2022", descricaoTarefa: "Fazer atividades", concluido: "em andamento" },
        { dataConclusao: "11/05/2022", descricaoTarefa: "Pintar a casa", concluido: "em andamento" },
        { dataConclusao: "21/05/2022", descricaoTarefa: "Estudar", concluido: "a fazer" },
        { dataConclusao: "30/09/2022", descricaoTarefa: "Dormir", concluido: "feito" },
    ]
}
function fazerTarefas(dataConclusao) {
    if (dataConclusao.concluido == "a fazer" || dataConclusao.concluido == "em andamento") {
        dataConclusao.concluido = "feito";
    }
}
console.log(gerenciadorTarefas);
fazerTarefas(gerenciadorTarefas.tarefas[0]);
fazerTarefas(gerenciadorTarefas.tarefas[2]);
fazerTarefas(gerenciadorTarefas.tarefas[3]);
fazerTarefas(gerenciadorTarefas.tarefas[4]);
//Tentei utilizar a função em uma linha passando todos os numeros porém apresentava um bug e não alterava o status
console.log(gerenciadorTarefas);