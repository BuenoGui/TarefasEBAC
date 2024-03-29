$(document).ready(function() {

        const Tarefas = [];

        let linhas = "";

        // Dica que me deram, tranformar a data em uma function e só trazer ela dpois com o uso do new Date()
        function FormatarData(data) {
        let dia = data.getDate();
        let mes = data.getMonth() + 1;
        let ano = data.getFullYear();

        // Formatar a data para declarar ela dpois com os "0" antes dos dias/meses
        if(dia < 10) {
            dia = '0' + dia
        }
        if(mes < 10) {
            mes = '0' + mes
        }

        return `${dia}/${mes}/${ano}`;
        }

        $('form').submit(function(adicionar) {
            adicionar.preventDefault();

            AdicionarTarefa();
            AtualizaTarefas();
        })

        function AdicionarTarefa() {
            const nomeTarefa = document.getElementById('tarefa');

            if(Tarefas.includes(nomeTarefa.value)) {
                alert('Você não pode ter duas tarefas com o mesmo nome...');
            } else {
            let linha = `<li>`;
            linha += `<p> <strong>${nomeTarefa.value}</strong> </p>`;
            linha += `<p>Tarefa adicionada: ${FormatarData(new Date())}`
            linha += `</li>`

            linhas += linha;
            Tarefas.push(nomeTarefa.value); // Essa linha serve para adicionar as tarefas dentro do Array, assim não podendo ter duas tarefas com o mesmo nome
            }
                    nomeTarefa.value = "";
        }

        function AtualizaTarefas() {
            const TodasAsTarefas = document.querySelector('ul');
            TodasAsTarefas.innerHTML = linhas;
        }


        // Código de validação para tarefas não serem concluidas diversas vezes
        $('.listaTarefas').on('click', 'li', function() {
            if($(this).hasClass('concluida')){
                alert("Essa tarefa já foi concluida!");
            } else {
            $(this).addClass('concluida');
            $(this).find('p:first-child').css({'text-decoration':'line-through'});
            $(this).append(`<p> Tarefa concluida: ${FormatarData(new Date())} </p>`);
            }
        })
})