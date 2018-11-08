function Game(canvasId){
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.frames = 60;
  this.xCanvasMax = 900;
  this.yCanvasMax = 600;
  this.backGround = new Background(this);
  this.player = new Player(this);
  this.stage = new Stage(this);
  this.coin = new Coins(this);
  this.scores = [new Score(this)];
  // CANTIDAD DE BILLETES
  this.scoresCount = 0;
  // FASES TERMINADAS
  this.wins = 0;
  // PUNTUACION  
  this.globalScore = 0;
  this.marcador = document.getElementById("score");
  // CONTROL DE CARTELES A MOSTRAR
  this.backGroundControl = 0;
  // MODULO PARA CONTROL DE VELOCIDAD
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
  
    this.clearscreen();
    this.stage.drawStage();

    window.onkeydown = function (e) {
      
      if(e.keyCode === 32){
        this.stage.stageCounter++;
        this.clearscreen();
        

        // VUELTA AL JUEGO
        if(this.stage.stageCounter === 3 || this.stage.stageCounter === 7){
          
          // CREACION DE ENEMIGOS SEGÚN LA FASE
          if(this.wins === 0){
            this.enemy = new Enemy(this);
          }
          if(this.wins === 1){
            this.guards = [new Guardias(this,150), new Guardias(this,350), new Guardias(this,550)];
          }
          this.startGame();


        }else{
          this.stage.drawStage();
        }
      }
    }.bind(this)
  
  
}
// SECUENCIA DEL BUCLE
Game.prototype.stopStart = function (){
  this.clearscreen();
  this.drawscreen();
  this.player.Keys();
  this.player.colisions();
  this.scoreBoard();
  this.scores.forEach(function(element) { element.drawScore(); });
  
  //CREACION DE SCORES (BILLETES)
  if (this.moduleCounter % 2500 === 0 && this.scoresCount < 15){
    this.scores.push(new Score(this));
    this.scoresCount ++;
  }
  
  this.moduleCounter++;
}

// INICIO DEL BUCLE
Game.prototype.startGame = function (){
  this.intervalId = setInterval(this.stopStart.bind(this),1000/frames);
}
// PARADA DEL BUCLE
Game.prototype.stop = function (){
  clearInterval(this.intervalId);
}
// BORRADO DE PANTALLA
Game.prototype.clearscreen = function(){
  this.ctx.clearRect(0,0,this.xCanvasMax,this.yCanvasMax);
} 

//PINTADO DE PANTALLA
Game.prototype.drawscreen = function(){
  
  this.backGround.drawBack();
  this.player.drawPlayer();
  

  // ENEMIGO DE LA FASE 1
  if(this.wins === 0){
    this.enemy.drawEnemy();
    this.enemy.enemyMove();
  }
  // ENEMIGO DE LA FASE 2
  if(this.wins === 1){
    this.guards.forEach (function(element){
      element.drawGuard();
      element.moveGuard();
    })
  }
  
  // ITEMS Y BOOSTERS
  this.coin.drawCoins();
  this.coin.drawAlbanil();
  this.coin.drawPuchi();
}

// ESCRITURA DEL MARCADOR
Game.prototype.scoreBoard = function(){
  this.marcador.innerHTML = ` ${this.globalScore} €`;
}

