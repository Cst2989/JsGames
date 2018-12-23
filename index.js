(function() {
    var MY_GAME = {
        PLAYER: function (nr){
            return {
                name: 'Player' + nr,
                cards: [],
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
    var Players = MY_GAME.players(), Cards = MY_GAME.shuffle(MY_GAME.cards);

    MY_GAME.deal(Players, Cards);
    console.log('Players: ',Players);
    console.log('Cards: ', Cards);
})();
