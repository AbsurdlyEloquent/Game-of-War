Object.defineProperty(window, 'Start', {
  get: function() {
    console.log("Here we go!");
    startGame();
  }
});
let isReady = function() {
  console.log('Enter "Start" to start the game.')
  }
isReady();
