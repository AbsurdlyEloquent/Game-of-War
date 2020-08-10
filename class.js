import { style } from './style.js'

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
    console.log(this.name, this.card.display.front)
  }
  warDraw() {
    this.warCards = [this.hand.shift(), this.hand.shift(), this.hand.shift(), this.hand.shift()]
    this.warCards = this.warCards.filter(x=>x!=null)
    console.log(this.name, this.warCards[this.warCards.length-1].display.front);

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
      case 10:
        this.rank = "➉"
        break;
      case 1:
        this.rank = 'Ace'
        break;
      default:
        // toString is for displaying cards easily
        this.rank = rank.toString();
    }
    this.display = {}
    this.display.front = `
    _____
   |${this.rank[0]}    |
   |     |
   |  ${this.suit}  |
   |     |
   |____${this.rank[0]}|
    `
    this.display.back = `
    ______
   |      |
   | ⁙⁙⁙ |
   | ⁙‽⁙ |
   | ⁙⁙⁙ |
   |______|
    `
  }
  redOrBlack() {
    if (this.suit === '♥' || this.suit === '♦') {
      return style.redCard
    } else {
      return style.blackCard
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
    console.log(`%c${this.cards[0].display.front}, ${this.cards[0].display.back}`, style.card);
  }
  shuffle(array) {
    // number is randomly + or - which tells the sort to switch or not
    return array.sort(() => Math.random() - 0.5)
  }
}
