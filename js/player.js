function Player(game) {
  this.game = game;
  this.xPlayer = 0;
  this.yPlayer = 50;
  this.wPlayer = 50;
  this.hPlayer = 50;
  this.playerSpeed = 1;
  this.xLimitLeft = 0;
  this.xLimitRight = this.game.xCanvasMax - this.wPlayer;
  this.yLimitTop = 0;
  this.yLimitDown = this.game.yCanvasMax - this.hPlayer;
  this.keysState = {
    keyUp: false,
    keyDown: false,
    keyLeft: false,
    keyRight: false
  };
  this.playerTarjet = 0;
  
  this.imageplayer = new Image();
  this.imageplayer.src = "./imagenes/player1.png";
  
}

Player.prototype.drawPlayer = function() {
  this.game.ctx.drawImage(this.imageplayer, this.xPlayer, this.yPlayer, this.wPlayer, this.hPlayer);
  
};

Player.prototype.Keys = function() {
  
  
  if(this.keysState.keyUp == true && this.keysState.keyLeft == true){
    this.imageplayer.src = "./imagenes/player5.png"
    if(this.xPlayer > this.xLimitLeft){
      this.xPlayer -= this.playerSpeed;
    }
    if(this.yPlayer > this.yLimitTop){
      this.yPlayer -= this.playerSpeed;
    }
    return;
  }
  if(this.keysState.keyUp == true && this.keysState.keyRight == true){
    this.imageplayer.src = "./imagenes/player6.png"
    if(this.xPlayer < this.xLimitRight){
      this.xPlayer += this.playerSpeed;
    }
    if(this.yPlayer > this.yLimitTop){
      this.yPlayer -= this.playerSpeed;
    }
    return;
  }
  if(this.keysState.keyDown == true && this.keysState.keyRight == true){
    this.imageplayer.src = "./imagenes/player8.png"
    if(this.xPlayer < this.xLimitRight){
    this.xPlayer += this.playerSpeed;
    }
    if(this.yPlayer < this.yLimitDown){
    this.yPlayer += this.playerSpeed;
    }
    return;
  }
  if(this.keysState.keyDown == true && this.keysState.keyLeft == true){
    this.imageplayer.src = "./imagenes/player7.png"
    if(this.xPlayer > this.xLimitLeft){
    this.xPlayer -= this.playerSpeed;
    }
    if(this.yPlayer < this.yLimitDown){
    this.yPlayer += this.playerSpeed;
    }
    return;
  }
  if(this.keysState.keyUp == true){
    this.imageplayer.src = "./imagenes/player4.png";
    if(this.yPlayer > this.yLimitTop){
    this.yPlayer -= this.playerSpeed;
    }
    return;
  }
  if(this.keysState.keyLeft == true){
    this.imageplayer.src = "./imagenes/player2.png";
    if(this.xPlayer > this.xLimitLeft){
    this.xPlayer -= this.playerSpeed;
    }
    return;
  }
  if(this.keysState.keyRight == true){
    this.imageplayer.src = "./imagenes/player1.png";
    if(this.xPlayer < this.xLimitRight){
    this.xPlayer += this.playerSpeed;
    }
    return;
  }
  if(this.keysState.keyDown == true){
    this.imageplayer.src = "./imagenes/player3.png";
    if(this.yPlayer < this.yLimitDown){
    this.yPlayer += this.playerSpeed;
    }
    return;
  }
};

Player.prototype.colisions = function (){
  
  // CONDICION DE VICTORIA
  if(this.xPlayer < 1 && this.yPlayer < 100 && this.playerTarjet === 1){
    
    this.game.stop();
    this.game.stage.stageCounter = 4;
    this.game.clearscreen();
    this.game.stage.drawStage();
    this.game.stage.stageCounter = 2;
    this.xPlayer = 0;
    this.yPlayer = 50;
    this.game.enemy.xEnemy = 600;
    this.game.enemy.yEnemy = 400;
    this.playerTarjet = 0;
    this.game.enemy = [];
    this.game.wins++;
    this.scores = [new Score(this)];
  }

  // COLISION CON EL SOBRE
  if (
    this.xPlayer < this.game.coin.xLetter + this.game.coin.wLetter && 
    this.game.coin.xLetter < this.xPlayer + this.wPlayer/2 &&
    this.yPlayer < this.game.coin.yLetter + this.game.coin.hLetter && 
    this.game.coin.yLetter < this.yPlayer + this.hPlayer/2
  ){
    this.playerTarjet = 1;
  }

  // COLISION CON ENEMY
  if (this.game.wins === 0){
    if(this.game.enemy.enemyTarjet === 0){
      if (
        this.xPlayer < this.game.enemy.xEnemy + this.game.enemy.wEnemy/2 && 
        this.game.enemy.xEnemy < this.xPlayer + this.wPlayer/2 &&
        this.yPlayer < this.game.enemy.yEnemy + this.game.enemy.hEnemy/2 && 
        this.game.enemy.yEnemy < this.yPlayer + this.hPlayer/2
      ){
        this.game.stop();
        this.game.stage.imgStage.src = "./imagenes/freedom.png";
        this.game.clearscreen();
        this.game.stage.drawStage(this);
        this.game.stage.stageCounter = 2;
        this.xPlayer = 0;
        this.yPlayer = 50;
        this.game.enemy.xEnemy = 600;
        this.game.enemy.yEnemy = 400;
        this.playerTarjet = 0;
      }
    }
  }
  
    

  // COLISION CON EL ACTA
  if (this.game.coin.countActa === 1 &&
    this.xPlayer < this.game.coin.xActa + this.game.coin.wActa && 
    this.game.coin.xActa < this.xPlayer + this.wPlayer/2 &&
    this.yPlayer < this.game.coin.yActa + this.game.coin.hActa && 
    this.game.coin.yActa < this.yPlayer + this.hPlayer/2
  ){
    this.game.enemy.enemyTarjet = 1;
    this.game.coin.countActa++;
  }

  // COLISION MONEY
  this.game.scores.forEach(function(element, index){
    if (this.xPlayer < element.xScore + element.wScore && 
      element.xScore < this.xPlayer + this.wPlayer/2 &&
      this.yPlayer < element.yScore + element.hScore && 
      element.yScore < this.yPlayer + this.hPlayer/2
    ){
      this.game.globalScore += element.scoreValue;
      
      return this.game.scores.splice(index, 1);
    }
    
  }.bind(this));
} 
