var rodada = 1;

$(document).ready(function (){
    $('#btn-start').click( function (){ 
        // checagem dos nomes dos jogadores
        if(($('#entrada-p1').val() === '') && ($('#entrada-p2').val() === '')){
            alert('Preencha os nomes dos jogadores!');
            return false;
        
        } 

        if($('#entrada-p1').val() === ''){
            alert('Nome do jogador 1 não foi preenchido!');
            return false;
        
        }

        if($('#entrada-p2').val() === ''){
            alert('Nome do jogador 2 não foi preenchido!');
            return false;
        
        }

        // coloca os nomes na tela
        $('#nome-p1').html($('#entrada-p1').val());
        $('#nome-p2').html($('#entrada-p2').val());

        // troca a tela
        $('#main-page').hide();
        $('#tic-tac-toe').show();

    });

    $('.quadrado').click( function (){ 
        var id_quadrado = this.id;
        jogada(id_quadrado);
    
    });

    function jogada(id){
        var icon = '';
        var player = 0;

        // checa qual jogador clicou através da variavel rodada
        // rodada % 2, se resta 1 é ímpar, jogador 1
        // resta 0 é par, jogador 2
        if ((rodada % 2) === 1){
            icon = 'url("img/marcacao_1.png")';
            player = -1;

        }

        else {
            icon = 'url("img/marcacao_2.png")';
            player = 1;

        }

        rodada++;

        $('#'+id).css('background-image', icon);

    }

});