$(document).ready(function(){
    
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
            $('form').slideUp();
    })

    
    $('form').on('submit',function(e) {
        e.preventDefault();
        const nomeAtividadeNova = $('#endereco-atividade-nova').val();
        const novoItem = $('<li></li>');
        $(`
            <div class="overlay-imagem-text">
            <a ="${nomeAtividadeNova}" target="text-decoration" title=" Clicar para marcar como realizado" > ${nomeAtividadeNova}</a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereco-atividade-nova').val('');
    })
})
