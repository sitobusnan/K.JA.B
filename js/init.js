window.onload = function() {
  document.getElementById("btn").onclick = function() {
    
    startGame();
  };

  
  
};
  function startGame(){
    var game = new Game("kjab");
    
    game.startStage();
  }
