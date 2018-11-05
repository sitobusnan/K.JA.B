function Player(game) {
  this.game = game;
  this.xPlayer = 0;
  this.yPlayer = 250;
  this.wPlayer = 50;
  this.hPlayer = 50;
  this.playerSpeed = 1;
  this.xLimitLeft = 0;
  this.xLimitRight = 650;
  this.yLimitTop = 120;
  this.yLimitDown = 450;
  this.keysState = {
    keyUp: false,
    keyDown: false,
    keyLeft: false,
    keyRight: false
  };
  this.payerTarjet = 0;
  
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
  if(this.xPlayer > this.game.xCanvasMax -60){
    this.playerTarjet = 1;
  }
  if(this.xPlayer < 1 && this.playerTarjet === 1){
    console.log(this.playerTarjet)
    this.game.stop();
  }
}
