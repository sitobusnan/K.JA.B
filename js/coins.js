function Coins (game){
  this.game = game;
  this.xCoin = 350;
  this.yCoin = 200;
  
  // LETTER
  this.wLetter = 43;
  this.hLetter = 50;
  this.yMaxLetter = this.game.yCanvasMax - this.hLetter;
  this.yMinLetter = 130;
  this.yLetter = Math.floor(Math.random() * (this.yMaxLetter - this.yMinLetter)+ this.yMinLetter );
  this.xLetter = this.game.xCanvasMax - this.wLetter - 3
  this.letter = new Image();
  this.letter.src = "./imagenes/elsobre.png";

  // BOOSTER
  this.wActa = 40;
  this.hActa = 30;
  this.xActa = 300;
  this.yActa = 500;
  this.countActa = 0;
  this.acta = new Image();
  this.acta.src = "./imagenes/acta.png";
}

Coins.prototype.drawCoins = function(){
  if(this.game.player.playerTarjet === 0){
    this.game.ctx.drawImage(this.letter, this.xLetter, this.yLetter);
    
  }
  if(this.countActa == 0 && this.game.enemy.moduleCounter % 300 === 0){
    debugger
    this.game.ctx.drawImage(this.acta,this.xActa,this.yActa);
    this.countActa++;
  }
}