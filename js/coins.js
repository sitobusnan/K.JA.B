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
  this.yActa = 300;
  this.countActa = 0;
  this.acta = new Image();
  this.acta.src = "./imagenes/acta.png";

  //ALBANIL
  this.wAlbanil = 50;
  this.hAlbanil = 50;
  this.xAlbanil = -60;
  this.yAlbanil = this.game.yCanvasMax - this.hAlbanil;
  this.albanil = new Image();
  this.albanil.src = "./imagenes/albanil.png";
}

Coins.prototype.drawCoins = function(){
  if(this.game.player.playerTarjet === 0){
    this.game.ctx.drawImage(this.letter, this.xLetter, this.yLetter);
    
  }
  if(this.countActa === 0 && this.game.enemy.moduleCounter % 1000 === 0){
    
    this.countActa++;
  }
  if(this.countActa === 1){
    this.game.ctx.drawImage(this.acta, this.xActa, this.yActa);
  }
}
Coins.prototype.drawAlbanil = function (){
  console.log(this.countActa)
  if(this.game.coin.countActa > 1 && this.game.enemy.yEnemy > 500){
    
    this.game.ctx.drawImage(this.albanil, this.xAlbanil,this.yAlbanil)
    if (this.game.enemy.moduleCounter % 5 === 0 && this.xAlbanil < this.game.enemy.xEnemy - this.wAlbanil){
      this.xAlbanil += this.game.enemy.enemySpeed;
    }
  }

}