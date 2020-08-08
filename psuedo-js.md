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

`isReady()` -Prompt to type 'Start', runs on window load

`StartGame()` -Called by command 'Start'. Initiates new `deck` from class and shuffles the deck.
