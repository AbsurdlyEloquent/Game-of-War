# Game of War Layout

## Initial Definitions
**Custom Commands:**

This goes at the beginning of `script.js`, just after the import statements

```js
Object.defineProperty(window, 'command', {
  get: function() {
    //what the command does
  }
});
```
**Commands:**
- 'Start' *-To start the game*
- 'Reset' *-To restart the game*

**Classes:**

- `player` generates a player with a name and an empty hand

- `card` generates a new card object with values passed from the deck

- `deck` generates a deck array with 52 `card` objects. has a `shuffle` method

- `game` generates a new game and initializes a shuffled deck. Prompts for two players. Methods for dealing and game rounds

**Functions:**

- `isReady()` -Prompt to type 'Start', runs on window load

- `StartGame()` -Called by command 'Start'. Initiates new `game`.

- `wait()` -Similar to bash `sleep`. Takes in ml values. *-Not mine, shamelessly stolen-*

## Document Flow

### Upon Load
- `import {style} from './style.js'`
- `import {game} from './class.js'`
- `isReady();`

### User types 'Start' into the console
**`startGame()` =>**
**`newGame = new game` =>**
- `new deck.shuffle()`
- Two `new player`'s. **`playerName = prompt();`**
- calls `game.deal()` to deal cards into array's of respective players. Now empty `deck` array is disposed of
**`game.deal()` calls `game.battle()`**
- Draws two cards from each players hand
*need to make a `draw` method for the players*
```js
if (player1.card.score > player2.card.score) {
  player1.hand.push(player1.card, player2.card)
  player1.card = null; player2.card = null;
} else if (player1.card.score < player2.card.score) {
  player2.hand.push(player1.card, player2.card)
  player1.card = null; player2.card = null;
} else if (player1.card.score === player2.card.score) {
  game.war(); //oooo scary
}
```
