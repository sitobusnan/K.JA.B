function Score (game){
  this.game = game;
  this.wScore = 45;
  this.hScore = 30;
  this.xMinScore = 100;
  this.xMaxScore = this.game.xCanvasMax - this.wScore;
  this.yMinScore = this.hScore;
  this.yMaxScore = 550;
  this.xScore = Math.floor(Math.random() * (this.xMaxScore - this.xMinScore)+ this.xMinScore );
  this.yScore = Math.floor(Math.random() * (this.yMaxScore - this.yMinScore)+ this.yMinScore );
  this.scoreValue = Math.floor(Math.random() * (500000 - 250000)+ 250000);

  this.moneyImg = new Image();
  this.moneyImg.src = "./imagenes/money.png";
  
}
Score.prototype.drawScore = function(){
  
  this.game.ctx.drawImage(this.moneyImg, this.xScore, this.yScore);
}