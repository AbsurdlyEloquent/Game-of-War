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
        this.rank = rank
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
  shuffle = function() {
    this.cards.sort(() => Math.random() - 0.5)
  }
}