window.onload = function() {
  document.getElementsByClassName("btn").onclick = function() {
    startGame();
  };

  var game = new Game("kjav");
 

  function startGame(ctx){
    game.start();
  }
};
