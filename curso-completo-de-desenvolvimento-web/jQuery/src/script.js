var rodada = 1;

// array multidimensional para guardar os dados do jogo
var matrizJogo = Array(3);
matrizJogo['a'] = Array(3);
matrizJogo['b'] = Array(3);
matrizJogo['c'] = Array(3);


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

        iniciaMatriz();

    });

    $('.quadrado').click( function (){ 
        var id_quadrado = this.id;
        // bugfix para não deixar clicar 2x
        $('#'+id_quadrado).off();
        jogada(id_quadrado);
    
    });

    function jogada(id){
        var icon = '';
        var player = 0;
        // array que stora a linha na posição 0 e a coluna na posição 1
        var linha_coluna = id.split('-');

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

        // coloca a marcação da jogada na grade
        $('#'+id).css('background-image', icon);

        // coloca o dado na posição correta do array
		matrizJogo[linha_coluna[0]][linha_coluna[1]] = player;
        
        verificaJogo();

    }

});

// função para apenas zerar a matriz
function iniciaMatriz(){
    for (var i=0; i<3; i++){
        matrizJogo['a'][i] = 0;
    
    }

    for (var i=0; i<3; i++){
        matrizJogo['b'][i] = 0;
    
    }

    for (var i=0; i<3; i++){
        matrizJogo['c'][i] = 0;
    
    }

}

// função que conta todas as linhas e colunas
// refatorar função depois, dá pra ficar mais simples separando em partes
function verificaJogo(){
    var pontos = 0;

    // horizontal
    for (var i=0; i<3; i++){
        pontos += matrizJogo['a'][i];

    }
    ganhador(pontos);

	pontos = 0;
    for (var i=0; i<3; i++){
        pontos += matrizJogo['b'][i];

    }
    ganhador(pontos);

	pontos = 0;
    for (var i=0; i<3; i++){
        pontos += matrizJogo['c'][i];

    }
    ganhador(pontos);

    // vertical
    for(var i=0; i<3; i++){
        pontos = 0;
        pontos += matrizJogo['a'][i];
        pontos += matrizJogo['b'][i];
        pontos += matrizJogo['c'][i];

        ganhador(pontos);

    }

    // diagonal
    pontos = 0;
    pontos = matrizJogo['a'][0] + matrizJogo['b'][1] + matrizJogo['c'][2];
    ganhador(pontos);

    pontos = 0;
    pontos = matrizJogo['a'][0] + matrizJogo['b'][1] + matrizJogo['c'][2];
    ganhador(pontos);

}

// função que confere se realmente alguém ganhou
function ganhador(pontos){
    if(pontos === -3){
        var jogada_1 = $('#entrada-p1').val();
        alert(jogada_1 + ' venceu!');
        $('.quadrado').off();
    
    } 
    
    else if(pontos === 3){
        var jogada_2 = $('#entrada-p2').val();
        alert(jogada_2 + ' venceu!');
        $('.quadrado').off();
    
    }

}

