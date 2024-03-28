$(document).ready(function() {

        const Tarefas = [];

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

        $('form').submit(function(adicionar) {
            adicionar.preventDefault();

            AdicionarTarefa();
            AtualizaTarefas();

        })

        function AdicionarTarefa() {
            const nomeTarefa = document.getElementById('tarefa');
            let data = `Tarefa adicionada ${dia}/${mes}/${ano}`;

            if(Tarefas.includes(nomeTarefa.value)) {
                alert('Você não pode ter duas tarefas com o mesmo nome...');
            } else {

            let linha = `<li>`;
            linha += `<p> ${nomeTarefa.value} </p>`;
            linha += `<p> ${data}`
            linha += `</li>`

            linhas += linha;
            }
                    nomeTarefa.value = "";
        }

        function AtualizaTarefas() {
            const TodasAsTarefas = document.querySelector('ul');
            TodasAsTarefas.innerHTML = linhas;
        }


})