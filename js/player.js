function Player(game) {
  this.game = game;
  this.xPlayer = 100;
  this.yPlayer = 200;
  this.wPlayer = 50;
  this.hPlayer = 50;
  this.playerSpeed = 1;
  this.xLimitLeft = 30;
  this.xLimitRight = 620;
  this.yLimitTop = 120;
  this.yLimitDown = 430;
  this.keysState = {
    keyUp: false,
    keyDown: false,
    keyLeft: false,
    keyRight: false
  }
  
  this.imageplayer = new Image();
  this.imageplayer.src = "./imagenes/player1.png";
  
}

Player.prototype.drawPlayer = function() {
  this.game.ctx.drawImage(this.imageplayer, this.xPlayer, this.yPlayer, this.wPlayer, this.hPlayer);
  //console.log(this.xPlayer);
  //console.log(this.yPlayer);
};

Player.prototype.Keys = function() {
  if(this.keysState.keyUp == true && this.keysState.keyLeft == true){
    this.imageplayer.src = "./imagenes/player5.png"
    
    this.xPlayer -= this.playerSpeed;
    
    this.yPlayer -= this.playerSpeed;
    return;
  }
  if(this.keysState.keyUp == true && this.keysState.keyRight == true){
    this.imageplayer.src = "./imagenes/player6.png"
    this.xPlayer += this.playerSpeed;
    this.yPlayer -= this.playerSpeed;
    return;
  }
  if(this.keysState.keyDown == true && this.keysState.keyRight == true){
    this.imageplayer.src = "./imagenes/player8.png"
    this.xPlayer += this.playerSpeed;
    this.yPlayer += this.playerSpeed;
    return;
  }
  if(this.keysState.keyDown == true && this.keysState.keyLeft == true){
    this.imageplayer.src = "./imagenes/player7.png"
    this.xPlayer -= this.playerSpeed;
    this.yPlayer += this.playerSpeed;
    return;
  }
  if(this.keysState.keyUp == true){
    this.imageplayer.src = "./imagenes/player4.png";
    this.yPlayer -= this.playerSpeed;
    return;
  }
  if(this.keysState.keyLeft == true){
    this.imageplayer.src = "./imagenes/player2.png";
    this.xPlayer -= this.playerSpeed;
    return;
  }
  if(this.keysState.keyRight == true){
    this.imageplayer.src = "./imagenes/player1.png";
    this.xPlayer += this.playerSpeed;
    return;
  }
  if(this.keysState.keyDown == true){
    this.imageplayer.src = "./imagenes/player3.png";
    this.yPlayer += this.playerSpeed;
    return;
  }





  // document.onkeydown = function(event) {
  //   switch (event.keyCode) {
  //     case 37:
  //       if(this.xPlayer > this.xLimitLeft){
  //         this.xPlayer -=this.playerSpeed;
  //       this.imageplayer.src = "./imagenes/player2.png";
  //       }
  //       break;
  //     case 38:
  //       if(this.yPlayer > this.yLimitTop){
  //         this.yPlayer -=this.playerSpeed;
  //       this.imageplayer.src = "./imagenes/player4.png";
  //       }
  //       break;
  //     case 39:
  //       if(this.xPlayer < this.xLimitRight){
  //         this.xPlayer +=this.playerSpeed;
  //       this.imageplayer.src = "./imagenes/player1.png";
  //       }
  //       break;
  //     case 40:
  //       if(this.yPlayer < this.yLimitDown){
  //         this.yPlayer +=this.playerSpeed;
  //       this.imageplayer.src = "./imagenes/player3.png";
  //       }
  //       break;
  //   }
    
  // }.bind(this);
};
