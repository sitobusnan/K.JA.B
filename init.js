window.onload = function() {
  document.getElementById("btn").onclick = function() {
    
    startGame();
  };

  var game = new Game("kjab");
 

  function startGame(){
    
    game.startStage();
  }
};
