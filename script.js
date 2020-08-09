import { style } from './style.js'
import { deck, player } from './class.js'

// this is my off brand node readline() that works in browsers
Object.defineProperty(window, 'Start', {
  get: function() {
    console.log("Here we go!🃞");
    startGame();
  }
});
Object.defineProperty(window, 'Reset', {
  get: function() {
    console.log('Resetting...')
    wait(2000)
    if (typeof newGame === typeof undefined || newGame === null) {
      console.error(`The game hasn't started!`)
    } else {
      window.newGame = null
    }
  }
})
// yes I really like ascii
isReady();
function isReady() {
console.log(`%c
    WWWWWWWW                           WWWWWWWW                                   !!!
    W::::::W                           W::::::W                                  !!:!!
    W::::::W                           W::::::W                                  !:::!
    W::::::W                           W::::::W                                  !:::!
     W:::::W           WWWWW           W:::::Waaaaaaaaaaaaa  rrrrr   rrrrrrrrr   !:::!
      W:::::W         W:::::W         W:::::W a::::::::::::a r::::rrr:::::::::r  !:::!
       W:::::W       W:::::::W       W:::::W  aaaaaaaaa:::::ar:::::::::::::::::r !:::!
        W:::::W     W:::::::::W     W:::::W            a::::arr::::::rrrrr::::::r!:::!
         W:::::W   W:::::W:::::W   W:::::W      aaaaaaa:::::a r:::::r     r:::::r!:::!
          W:::::W W:::::W W:::::W W:::::W     aa::::::::::::a r:::::r     rrrrrrr!:::!
           W:::::W:::::W   W:::::W:::::W     a::::aaaa::::::a r:::::r            !!:!!
            W:::::::::W     W:::::::::W     a::::a    a:::::a r:::::r             !!!
             W:::::::W       W:::::::W      a::::a    a:::::a r:::::r
              W:::::W         W:::::W       a:::::aaaa::::::a r:::::r             !!!
               W:::W           W:::W         a::::::::::aa:::ar:::::r            !!:!!
                WWW             WWW           aaaaaaaaaa  aaaarrrrrrr             !!!
                        `, style.isReady);
console.log(`%c  _             _
 /_\`_ _/__  _  /_\`_/__  __/_ _/__    __/__  __/_ _/_/_ _   _  _  _ _  _  /
/_,/ // /_'/  ._/ / /_|/ /   / /_/ _\\ / /_|/ /   / / //_' /_//_|/ / //_'.
                                                          _/
`, style.isReady2,)
}

function startGame() {
  window.newGame = new game();
  newGame.deal();
 while (newGame.active === true) {
 newGame.battle();
 wait(500);
// finishGame(newGame.winner)
  }
}

function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

class game {
  constructor() {
    this.active = true;
    this.newDeck = new deck()
    this.newDeck.shuffle(this.newDeck.cards)
    console.log(this.newDeck.cards);
    this.battleNum = 1;
    this.player1 = new player(prompt('Enter the name of player one:'))
    this.player2 = new player(prompt('Enter the name of player two:'))
  }
//I really wanted to make this dependent on the deck length but I couldn't make it work
  deal() {
    for (let i = 0; i < 26; i++) {
      let card1 = this.newDeck.cards.shift()
      let card2 = this.newDeck.cards.shift()
      this.player1.hand.push(card1)
      this.player2.hand.push(card2)
    }
  }
  endGame(player) {
    console.log(`woah ${player.name} won
      and now we done`);
    this.winner = player
    this.active = false;
  }
  checkCards() {
    if (this.player1.hand === undefined || this.player1.hand.length == 0) {
      if (this.player1.discard.length > 0 ) {
        this.player1.hand = this.newDeck.shuffle(this.player1.discard)
        this.player1.discard = []
    } else {
      //if both the discard and the hand are empty, end the game
        this.endGame(this.player2)
    }
  } else if (this.player2.hand === undefined || this.player2.hand.length == 0) {
      if (this.player2.discard.length > 0) {
        this.player.hand = this.newDeck.shuffle(this.player2.discard)
        this.player2.discard = []
      } else {
      this.endGame(this.player1)
    }
    } else {
      this.battleNum++
    }
  }
  war() {
    console.log(`oh you're both fucked now`);
    this.player1.warDraw()
    this.player2.warDraw()
    if (this.player1.warCards[this.player1.warCards.length-1].score > this.player2.warCards[this.player2.warCards.length-1].score) {
      console.log(`You may have won the battle, ${player1}, but not the war- ...oh wait`);
      for (var i of this.player1.warCards) {
        this.player1.discard.push(this.player1.warCards[i], this.player2.warCards[i])
      }
    }
  }
  battle() {
    this.checkCards();
    battle:
    if (this.active === false) {
      break battle
    } else {
      console.log(`Battle ${this.battleNum}`)
      this.player1.draw()
      this.player2.draw()
      if (this.player1.card.score > this.player2.card.score) {
        console.log(`${this.player1.name} wins lol`)
        this.player1.discard.push(this.player1.card, this.player2.card)
      } else if (this.player1.card.score < this.player2.card.score) {
        console.log(`${this.player2.name} wins lol`);
        this.player2.discard.push(this.player1.card, this.player2.card)
      } else if (this.player1.card.score === this.player2.card.score) {
        this.war(); //oooo scary
      }
      delete this.player1.card, this.player2.card
    }
  }
}
