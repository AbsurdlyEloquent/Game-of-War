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

- `StartGame()` -Called by command 'Start'. Initiates new `game`.

- `wait()` -Similar to bash `sleep`. Takes in ml values. *-Not mine, shamelessly stolen-*

- `gameEnd()` -Ends the game and prompts for a reset

## Document Flow

### Upon Load
- `import {style} from './style.js'`
- `import {deck, player} from './class.js'`
- `import {design} from './design.js'`
- `isReady();`

### User types 'Start' into the console
**`startGame()` =>**
**`newGame = new game` =>**
- `new deck.shuffle()`
- Two `new player`'s. **`player.name = prompt();`**
- calls `game.deal()` to deal cards into array's of respective players. Now empty `deck` array is disposed of
**`game.deal()` calls `game.battle()`**
- `player.draw()` Draws two cards from each players hand
- `game.battle()` compares the two cards and decided who the winner is. If both cards are the same, `game.war()` is called *isn't that scary*

- `game.checkCards()` runs often throughout this. If a player runs out of cards, this method shuffles their discard pile and puts it in their `hand`
- if the discard is empty, it calls the `game.endGame()` which declares a winner and calls `gameEnd()` *I know it's redundant but it works*
