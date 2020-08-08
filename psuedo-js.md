# Game of War Layout

### Custom Commands
This goes at the beginning of `script.js`, just after the import statements

```js
Object.defineProperty(window, '*command*', {
  get: function() {
    //what the command does
  }
});
```
**Commands:**
- 'Start' *-To start the game*
- 'Reset' *-To restart the game*

**Classes**

-`player` generates a player with a name and an empty hand

-`card` generates a new card object with values passed from the deck

-`deck` generates a deck array with 52 `card` objects. has a `shuffle` method

-`game` generates a new game and initializes a shuffled deck. Prompts for two players. Methods for dealing and game rounds

**Functions:**

-`isReady()` -Prompt to type 'Start', runs on window load

-`StartGame()` -Called by command 'Start'. Initiates new `game`.
