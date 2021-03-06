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

// MOVIMIENTO DEL JUGADOR
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
    if (this.game.wins === 0){
      this.game.stage.stageCounter = 4;
      this.game.clearscreen();
      this.game.stage.drawStage();
      // this.game.stage.stageCounter = 2;
      this.xPlayer = 0;
      this.yPlayer = 50;
      this.game.enemy.xEnemy = 600;
      this.game.enemy.yEnemy = 400;
      this.playerTarjet = 0;
      this.game.enemy = [];
      this.game.wins++;
      this.scores = [new Score(this)];
    }
    if (this.game.wins === 1 && this.playerTarjet === 1){
      this.game.stage.stageCounter = 8;
      this.game.clearscreen();
      this.game.stage.drawStage();
    }
    
  }

  // COLISION CON EL SOBRE
  if (
    this.xPlayer < this.game.coin.xLetter + this.game.coin.wLetter && 
    this.game.coin.xLetter < this.xPlayer + this.wPlayer/2 &&
    this.yPlayer < this.game.coin.yLetter + this.game.coin.hLetter && 
    this.game.coin.yLetter < this.yPlayer + this.hPlayer/2
  ){
    this.playerTarjet = 1;
    this.game.cash.play();
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
        this.game.mf.play();
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
    
    this.game.booster.play();
  }

  // COLISION SCORES
  this.game.scores.forEach(function(element, index){
    if (this.xPlayer < element.xScore + element.wScore && 
      element.xScore < this.xPlayer + this.wPlayer/2 &&
      this.yPlayer < element.yScore + element.hScore && 
      element.yScore < this.yPlayer + this.hPlayer/2
    ){
      this.game.globalScore += element.scoreValue;
      this.game.cash.play();
      return this.game.scores.splice(index, 1);
    }
  }.bind(this));
  
  // COLISION BANDERITA
  if (this.game.coin.countBandera === 1 &&
    this.xPlayer < this.game.coin.xBandera + this.game.coin.wBandera && 
    this.game.coin.xBandera < this.xPlayer + this.wPlayer/2 &&
    this.yPlayer < this.game.coin.yBandera + this.game.coin.hBandera && 
    this.game.coin.yBandera < this.yPlayer + this.hPlayer/2
  ){
    this.game.coin.countBandera++;
    
    this.game.booster.play();
    
  }

  //COLISION CON LOS GUARDIAS
  if(this.game.wins === 1 && this.game.guards){
    this.game.guards.forEach(function(element){
    if (this.xPlayer < element.xGuard + element.wGuard && 
      element.xGuard < this.xPlayer + this.wPlayer/2 &&
      this.yPlayer < element.yGuard + element.hGuard && 
      element.yGuard < this.yPlayer + this.hPlayer/2){

        this.game.stop();
        this.game.mf.play();
        this.game.stage.imgStage.src = "./imagenes/freedom2.png";
        this.game.clearscreen();
        this.game.stage.drawStage(this);
        this.game.stage.stageCounter = 2;
        this.xPlayer = 0;
        this.yPlayer = 50;
        
        this.playerTarjet = 0;

      }
  }.bind(this));
  }
  
} 
