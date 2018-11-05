function Stage (game){
  this.game = game;

  this.imgStage = new Image();
  this.imgStage.src = "./imagenes/kartBarcenas.png"
}

Stage.prototype.drawStage = function(){
  this.game.ctx.drawImage(this.imgStage,0,0,this.game.xCanvasMax,this.game.yCanvasMax);
}