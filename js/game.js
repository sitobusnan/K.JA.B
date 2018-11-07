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
  this.marcador = document.getElementById("score");
  this.backGroundControl = 0;
  this.moduleCounter = 0;
  if(this.moduleCounter === 10000){this.moduleCounter = 500;}



  document.addEventListener('keydown', function (e) {
      e.preventDefault();
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

    

    window.onkeydown = function (e) {
      console.log(e.keyCode)
      if(e.keyCode === 73){
        this.stage.imgStage.src = "./imagenes/instrucciones1.png";
        this.clearscreen();
        this.stage.drawStage(this);
      }
      if(e.keyCode === 85){
        console.log(e.keyCode)
        this.stage.imgStage.src = "./imagenes/STAGE1.png";
        this.clearscreen();
        this.stage.drawStage(this);
      }
      if(e.keyCode === 32){
        this.startGame();
      }
    }.bind(this)
  
  
}

Game.prototype.stopStart = function (){
  this.clearscreen();
  this.drawscreen();
  this.player.Keys();
  this.player.colisions();
  
  this.scoreBoard();
  
  this.moduleCounter++;

  this.scores.forEach(function(element) { element.drawScore(); });
  
  if (this.moduleCounter % 2500 === 0 && this.scoresCount < 15){
    this.scores.push(new Score(this));
    this.scoresCount ++;
  }
}


Game.prototype.startGame = function (){
  this.intervalId = setInterval(this.stopStart.bind(this),1000/frames);
}

Game.prototype.clearscreen = function(){
  this.ctx.clearRect(0,0,this.xCanvasMax,this.yCanvasMax);
  
} 

Game.prototype.drawscreen = function(){
  
  this.backGround.drawBack();
  this.player.drawPlayer();
  
  this.enemy.drawEnemy();
  this.enemy.enemyMove();

  this.coin.drawCoins();
  this.coin.drawAlbanil();
}

Game.prototype.stop = function (){
  clearInterval(this.intervalId);
}

Game.prototype.scoreBoard = function(){
  this.marcador.innerHTML = ` ${this.globalScore} €`;
}

