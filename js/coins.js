function Coins (game){
  this.game = game;
  this.xCoin = 350;
  this.yCoin = 200;
  this.wLetter = 43;
  this.hLetter = 50;
  this.yMaxLetter = this.game.yCanvasMax - this.hLetter;
  this.yMinLetter = 130;
  this.yLetter = Math.floor(Math.random() * (this.yMaxLetter - this.yMinLetter)+ this.yMinLetter );
  this.xLetter = this.game.xCanvasMax - this.wLetter - 3

  this.letter = new Image();
  this.letter.src = "./imagenes/elsobre.png";
}

Coins.prototype.drawLetter = function(){
  if(this.game.player.playerTarjet === 0){
    this.game.ctx.drawImage(this.letter, this.xLetter, this.yLetter);
  }
}