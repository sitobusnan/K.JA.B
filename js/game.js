function Game(canvasId){
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.frames = 60;
  this.xCanvasMax = 900;
  this.yCanvasMax = 600;
  this.backGround = new Background(this);
  this.player = new Player(this);
  this.enemy = new Enemy(this);
  this.stage = new Stage(this);
  this.coin = new Coins(this);
  this.scores = [new Score(this)];
  this.scoresCount = 0;
  this.globalScore = 0;
  



  document.addEventListener('keydown', function (e) {
    
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
  // setTimeout (function(){
  //   clearInterval(this.intervalStage);
  //   this.startGame();
  // }.bind(this), 3000)
  // this.intervalStage = setInterval(function(){
  //   this.clearscreen();
  //   this.backGround.drawBack();
  //   this.stage.drawStage();
  // }.bind(this), 1000/frames)

    this.clearscreen();
    
    this.stage.drawStage();

    window.onkeypress = function () {
      this.startGame();
    }.bind(this)
  
  
}


Game.prototype.startGame = function (){
  this.intervalId = setInterval(function(){
  this.clearscreen();
  this.drawscreen();
  this.player.Keys();
  this.player.colisions();
  this.coin.drawCoins();
  this.coin.drawAlbanil();
  
  this.scores.forEach(function(element) { element.drawScore(); });
  
  if (this.enemy.moduleCounter % 3000 === 0 && this.scoresCount < 15){
    this.scores.push(new Score(this));
    this.scoresCount ++;
  }
  
 }.bind(this), 1000/frames);
}

Game.prototype.clearscreen = function(){
  this.ctx.clearRect(0,0,this.xCanvasMax,this.yCanvasMax);
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

