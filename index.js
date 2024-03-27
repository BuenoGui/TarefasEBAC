$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        let linhas = "";
        let Hoje = new Date();
        let dia = Hoje.getDate();
        let mes = Hoje.getMonth() + 1;
        let ano = Hoje.getFullYear();

        if(dia < 10) {
            dia = '0' + dia
        }
        if(mes < 10) {
            mes = '0' + mes
        }

        AdicionarTarefa();
        AtualizaTarefas();

        function AdicionarTarefa() {
            let tarefa = $('#tarefa').val();
            let data = `Tarefa adicionada ${dia}/${mes}/${ano}`

            let linha = `<li>`;
            linha += `<p> ${tarefa} </p>`;
            linha += `<p> ${data}`

            linhas += linha;
        }

        function AtualizaTarefas() {
            const TodasAsTarefas = document.querySelector('ul');
            TodasAsTarefas.innerHTML = linhas;
        }




        
    })





















})