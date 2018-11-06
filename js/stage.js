function Stage (game){
  this.game = game;

  this.imgStage = new Image();
  this.imgStage.src = "./imagenes/STAGE1.png";
}

Stage.prototype.drawStage = function(){
  
    this.game.ctx.drawImage(this.imgStage,0,0,this.game.xCanvasMax,this.game.yCanvasMax);
  

}

Stage.prototype.backControl = function(){
  if(this.game.backGroundControl === 0){
    this.imgStage.src = "./imagenes/instrucciones1.png";
  }
}