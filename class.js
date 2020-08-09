export class player {
  constructor(name) {
    this.name = name;
    //will be filled with cards upon game.deal()
    this.hand = [];
    this.discard = [];
    this.discard = [];
  }
  draw() {
    // Draws a card and puts it in its own property
    // The property will be deleted at the end of the battle
    this.card = this.hand.shift();
    console.log(this.name, this.card)
  }
  warDraw() {
    this.warCards = [this.hand.shift(), this.hand.shift(), this.hand.shift(), this.hand.shift()]
    console.log(this.name, this.warCards[3]);
  }
}
export class card {
  constructor(suit, rank) {
    this.suit = suit;
    this.score = rank;
    switch(rank) {
      case 13:
        this.rank = 'King'
        break;
      case 12:
        this.rank = 'Queen'
        break;
      case 11:
        this.rank = "Jack"
        break;
      default:
      // toString is for displaying cards easily
        this.rank = rank.toString();
        break;
      case 0:
        this.rank = 'ace'
    }
  }
}
export class deck {
  constructor() {
    this.cards = [];
    for (var suit = 4; suit > 0; suit--) {
      for (var rank = 13; rank > 0; rank--) {
        switch(suit) {
          case 4:
            this.cards.push(new card('♥', rank))
            break;
          case 3:
            this.cards.push(new card('♦', rank))
            break;
          case 2:
            this.cards.push(new card('♣', rank))
            break;
          case 1:
            this.cards.push(new card('♠', rank))
        }
      }
    }
  }
  shuffle(array) {
    // number is randomly + or - which tells the sort to switch or not
    return array.sort(() => Math.random() - 0.5)
  }
}
export class game {
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
    this.active = false;
  }
  checkCards() {
    if (this.player1.hand === undefined || this.player1.hand.length == 0) {
      console.log(`oh shit ${this.player1.name}`);
      this.endGame(this.player2)
    } else if (this.player2.hand === undefined || this.player2.hand.length == 0) {
      console.log(`oh shit ${this.player2.name}`);
      this.endGame(this.player1)
    } else {
      this.battleNum++
    }
  }
  war() {
    console.log(`oh you're both fucked now`);
    this.player1.warDraw()
    this.player2.warDraw()
    if (this.player1.warCards.score > this.player2.warCards.score) {
      console.log(`You may have won the battle, ${player1}, but not the war- ...oh wait`);
      for (var i of this.player1.warCards) {
        this.player1.hand.push(this.player1.warCards[i], this.player2.warCards[i])
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
