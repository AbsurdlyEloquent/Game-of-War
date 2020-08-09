export class player {
  constructor(name) {
    this.name = name;
    //will be filled with cards upon game.deal()
    this.hand = [];
  }
  draw() {
    // Draws a card and puts it in its own property
    // The property will be deleted at the end of the battle
    this.card = this.hand.shift();
    console.log(this.hand)
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
            this.cards.push(new card('hearts', rank))
            break;
          case 3:
            this.cards.push(new card('diamonds', rank))
            break;
          case 2:
            this.cards.push(new card('clubs', rank))
            break;
          case 1:
            this.cards.push(new card('spades', rank))
        }
      }
    }
  }
  shuffle() {
    // number is randomly + or - which tells the sort to switch or not
    return this.cards.sort(() => Math.random() - 0.5)
  }
}
export class game {
  constructor() {
    this.newDeck = new deck().shuffle();
    this.battleNum = 0;
    this.player1 = new player(prompt('Enter the name of player one:'))
    this.player2 = new player(prompt('Enter the name of player two:'))
  }
//I really wanted to make this dependent on the deck length but I couldn't make it work
  deal() {
    for (let i = 0; i < 26; i++) {
      let card1 = this.newDeck.shift()
      let card2 = this.newDeck.shift()
      this.player1.hand.push(card1)
      this.player2.hand.push(card2)
    }
  }
  battle() {
    this.player1.draw()
    this.player2.draw()
  }
}
