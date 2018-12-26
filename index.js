(function() {
    var GAME_MECHANICS = {
        SHARP_CARDS: ['7 Rosie', '7 Romb', '7 Trefla', '7 Neagra'],
        PLAYER: function (nr){
            return {
                name: 'Player' + nr,
                cards: [],
                order: nr,
                is_turn: false,
                setTurn: function() {
                    this.is_turn = true
                }
            }
        },
        players: function() {
            const players = [];
            for(var i=1; i < 5; i++) {
                players.push(new this.PLAYER(i));
            }
            return players;
        },
        cards: function() {
            var createdCards = [];
            for(var i = 7; i < 15; i++) {
                var cardType = '';
                switch(i) {
                    case 11:
                        cardType = 'Juvete';
                        break;
                    case 12:
                        cardType = 'Dama';
                        break;
                    case 13:
                        cardType = 'Popa';
                        break;
                    case 14:
                        cardType = 'As';
                        break;
                    default:
                        cardType = i;
                }
                var colors = ['Rosie', 'Romb', 'Trefla', 'Neagra'], colors_length = colors.length;
                for(var y = 0; y < colors_length; y++) {

                    var card = cardType + ' ' + colors[y];
                    createdCards.push(card)
                }
            }
            return createdCards;
        }(),
        shuffle: function (cards) {
            var j, x, i;
            for (i = cards.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = cards[i];
                cards[i] = cards[j];
                cards[j] = x;
            }
            return cards;
        },
        deal: function(players, cards) {
            do {
                for(var i = 0; i < 4; i++) {
                    players[i].cards.push(cards.pop())
                }
            }
            while (players[3].cards.length < 4);
            players[0].setTurn();
        }
    };
    var VISUAL_GAME = {
        playerHtml: function(player) {
            var cards = '';
            player.cards.forEach(function(card) {
                cards += '<div class="card">'+ card +'</div>';
            });
            var extra = player.order === 2 ? '<div class="main">Drop here</div>' : '';
            return extra + '<div class="player player-'+ player.order +'"><div class="name">'+ player.name +'</div><div class="cards">'+ cards +'</div></div>'
        },
        drawPlayers: function(players) {
            var div = document.getElementById('main');
            var self= this;
            players.forEach(function(player){
                div.innerHTML += self.playerHtml(player);
            });
        }
    };
    var Players = GAME_MECHANICS.players(), Cards = GAME_MECHANICS.shuffle(GAME_MECHANICS.cards);

    GAME_MECHANICS.deal(Players, Cards);
    VISUAL_GAME.drawPlayers(Players);

    console.log('Players: ',Players);
    console.log('Cards: ', Cards);
})();
