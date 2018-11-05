function Game(canvasId){
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.frames = 60;
  this.backGround = new Background(this);
  this.player = new Player(this);
  this.enemy = new Enemy(this);
  this.stage = new Stage(this);
  this.intervalStage = function(){}



  document.addEventListener('keydown', function (e) {
    //   lastDownTarget = event.target;
      if (e.keyCode === 37) {
          
          this.player.keysState.keyLeft = true;
          
      }
      if (e.keyCode === 38) {
          this.player.keysState.keyUp = true;
      }
      if (e.keyCode === 39) {
          this.player.keysState.keyRight = true;
      }
      if (e.keyCode === 40) {
          this.player.keysState.keyDown = true;
      }
    }.bind(this));
    
    document.addEventListener('keyup', function (e) {
      //   lastDownTarget = event.target;
        if (e.keyCode === 37) {
            this.player.keysState.keyLeft = false;
        }
        if (e.keyCode === 38) {
            this.player.keysState.keyUp = false;
        }
        if (e.keyCode === 39) {
            this.player.keysState.keyRight = false;
        }
        if (e.keyCode === 40) {
            this.player.keysState.keyDown = false;
        }
      }.bind(this));
  
}

Game.prototype.startStage = function(){
  setTimeout (function(){
    clearInterval(this.intervalStage);
    this.startGame();
  }.bind(this), 3000)
  this.intervalStage = setInterval(function(){
    this.clearscreen();
    this.backGround.drawBack();
    this.stage.drawStage();
  }.bind(this), 1000/frames)
  
}


Game.prototype.startGame = function (){
  this.intervalId = setInterval(function(){
  this.clearscreen();
  this.drawscreen();
  this.player.Keys();
  
 }.bind(this), 1000/frames);
}

Game.prototype.clearscreen = function(){
  this.ctx.clearRect(0,0,700,500);
} 

Game.prototype.drawscreen = function(){
  
  this.backGround.drawBack();
  this.player.drawPlayer();
  
  this.enemy.drawEnemy();
  this.enemy.enemyMove();
}

Game.prototype.stop = function (){
  clearInterval(this.intervalId);
}

