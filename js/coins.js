function Coins (game){
  this.game = game;
  this.xCoin = 350;
  this.yCoin = 200;
  
  // LETTER
  this.wLetter = 43;
  this.hLetter = 50;
  this.yMaxLetter = this.game.yCanvasMax - this.hLetter;
  this.yMinLetter = 500;
  this.yLetter = Math.floor(Math.random() * (this.yMaxLetter - this.yMinLetter)+ this.yMinLetter );
  this.xLetter = this.game.xCanvasMax - this.wLetter - 3
  this.letter = new Image();
  this.letter.src = "./imagenes/elsobre.png";

  // BOOSTER1
  this.wActa = 40;
  this.hActa = 30;
  this.xActa = 300;
  this.yActa = 300;
  this.countActa = 0;
  this.acta = new Image();
  this.acta.src = "./imagenes/acta.png";

  //BOOSTER2
  this.wBandera = 50;
  this.hBandera = 40;
  this.xBandera = 400;
  this.yBandera = 400;
  this.countBandera = 0;
  this.imgBandera = new Image();
  this.imgBandera.src = "./imagenes/banderita.png"

  //ALBANIL
  this.wAlbanil = 50;
  this.hAlbanil = 50;
  this.xAlbanil = -60;
  this.yAlbanil = this.game.yCanvasMax - this.hAlbanil;
  this.albanil = new Image();
  this.albanil.src = "./imagenes/albanil.png";

  //PUCHI
  this.wPuchi = 50;
  this.hPuchi = 50;
  this.xPuchi = -60;
  this.yPuchi = 350;
  this.puchiControl = 0;
  this.puchi = new Image();
  this.puchi.src = "./imagenes/puchi.png";
  this.speedPuchi = 1;
  
}

Coins.prototype.drawCoins = function(){
  if(this.game.player.playerTarjet === 0){
    this.game.ctx.drawImage(this.letter, this.xLetter, this.yLetter);
    
  }
  if(this.countActa === 0 && this.game.globalScore > 1500000 && this.game.wins === 0){
    this.countActa++;
  }
  if(this.countActa === 1){
    this.game.ctx.drawImage(this.acta, this.xActa, this.yActa);
  }
  if(this.countBandera === 0 && this.game.wins === 1 && this.game.moduleCounter % 5000 === 0){
    this.countBandera++;
  }
  if(this.countBandera === 1){
    
    this.game.ctx.drawImage(this.imgBandera,this.xBandera,this.yBandera,this.wBandera,this.hBandera);
  }
}

Coins.prototype.drawAlbanil = function (){
  
  if(this.game.coin.countActa > 1 && this.game.enemy.yEnemy > 500){
    
    this.game.ctx.drawImage(this.albanil, this.xAlbanil,this.yAlbanil)
    if (this.game.moduleCounter % 5 === 0 && this.xAlbanil < this.game.enemy.xEnemy - this.wAlbanil){
      this.xAlbanil += this.game.enemy.enemySpeed;
    }
  }

}

Coins.prototype.drawPuchi = function (){
  
  if(this.countBandera > 1 && this.game.guards[1].xGuard > 450 && this.game.guards[1].speedGuard > 0 ){
    this.puchiControl++ 
    
  }
  if(this.puchiControl >= 1){
    this.game.ctx.drawImage(this.puchi, this.xPuchi, this.yPuchi)
    this.xPuchi += this.speedPuchi;
    if(this.xPuchi > this.game.guards[1].xGuard + 20){
      this.game.guards[1].speedGuard = 1;
      this.game.guards[1].xGuardMax = this.xPuchi;
      
      console.log(this.game.guards[1].xGuardMax)
    }
  }

}