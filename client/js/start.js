var game, map, inventory;
var count = 0;
$(function() {

    game = $('#game');
    inventory = $('#inventory');
    map = new Maps([
        [false, false, false, true, true, false, false, true, true, false, false, false, false, false, false, false, false, false, false, true, true, false, false, true, true, false, false, false],
        [true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true],
        [true, false, false, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, false, false, true],
        [true, false, false, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, false, false, true],
        [true, false, false, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, false, false, true],
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        [true, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, true],
        [true, true, true, false, false, true, true, true, true, true, true, true, false, false, false, false, true, true, true, true, true, true, true, false, false, true, true, true],
        [true, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, true],
        [true, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, true],
        [true, true, true, false, false, true, true, true, true, true, true, true, false, false, false, false, true, true, true, true, true, true, true, false, false, true, true, true],
        [true, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, true],
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        [true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true],
        [true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true],
        [true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true],
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
    ], 'img/mapa1.png', {
        3: {
            7: {
                3: function() {
                    if ($('#papel1trigger:visible')) {
                        $('#papel1trigger').hide();
                        $('#papel1').show();
                        count++;
                        if(count==4){
                            showMessageComplete();
                        }
                    }
                }
            }
        },
        2: {
            27: {
                3: function() {
                    if ($('#papel4trigger:visible')) {
                        $('#papel4trigger').hide();
                        $('#papel4').show();
                        count++;
                        if(count==4){
                            showMessageComplete();
                        }
                    }
                }
            }
        },
        1: {
            26: {
                0: function() {
                    if ($('#papel4trigger:visible')) {
                        $('#papel4trigger').hide();
                        $('#papel4').show();
                        count++;
                        if(count==4){
                            showMessageComplete();
                        }
                    }
                }
            }
        },
        18: {
            21: {
                1: function() {
                    if ($('#papel3trigger:visible')) {
                        $('#papel3trigger').hide();
                        $('#papel3').show();
                        count++;
                        if(count==4){
                            showMessageComplete();
                        }
                    }
                }
            }
        },
        17: {
            20: {
                2: function() {
                    if ($('#papel3trigger:visible')) {
                        $('#papel3trigger').hide();
                        $('#papel3').show();
                        count++;
                        if(count==4){
                            showMessageComplete();
                        }
                    }
                }
            }
        },
        14: {
            2: {
                0: function() {
                    if ($('#papel2trigger:visible')) {
                        $('#papel2trigger').hide();
                        $('#papel2').show();
                        count++;
                        if(count==4){
                            showMessageComplete();
                        }
                    }
                }
            }
        },
        15: {
            3: {
                3: function() {
                    if ($('#papel2trigger:visible')) {
                        $('#papel2trigger').hide();
                        $('#papel2').show();
                        count++;
                        if(count==4){
                            showMessageComplete();
                        }
                    }
                }
            }
        }

    });
    map.show();
    var charset = new Charset("img/sprite.png", 'char1');

    charset.show();

    var controls = new Control(charset, map);
    $('#mission').click(function() {
        $('<div>').css('text-align', 'center').html('Bem vinda!<br> O objetivo é juntar todas os pedaços da mensagem para conseguir entende-la!<br>Pode até ser besta, mas tera uma surpresa ao ler a mensagem!<br><strong>controles</strong><br> A - Cima<br>S - Baixo<br>A - esquerda<br>D - Direita<br>Enter - pegar objeto ').dialog({
            modal: true,
            resizable: false,
            dragable: false,
            w: 300,
            h: 150,
            title: "girl's quest"
        });

    });
    $('#mission').click();
    function showMessageComplete(){
        $('<div>').css('background', 'url("img/imagemcompleta.png")').html('Obrigado. Desde que te conheci me encantei com a forma de voce falar e se expressar, do como fala sobre suas series e aspirações. Gostaria de te conhecer melhor, ser mais do que somente um nerd da campus party, voce me permite? ').dialog({
            modal: true,
            resizable: false,
            dragable: false,
            w: 300,
            h: 150,
            title: "girl's quest"
        });
    }
});



