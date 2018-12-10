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
});