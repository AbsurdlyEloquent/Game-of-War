import { style } from './style.js'
import { game, player } from './class.js'

isReady();

Object.defineProperty(window, 'Start', {
  get: function() {
    console.log("Here we go!");
    startGame();
  }
});

function isReady() {
//  window.player1 = prompt(`Enter the name of player one:`);
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
  console.log(newGame.player1, newGame.player2)
  console.log(newGame.newDeck);
}
