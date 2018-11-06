function Stage (game){
  this.game = game;

  this.imgStage = new Image();
  this.imgStage.src = "./imagenes/logo.png";
}

Stage.prototype.drawStage = function(){
    console.log(this.imgStage.src)
    this.game.ctx.drawImage(this.imgStage ,0 ,0 , this.game.xCanvasMax, this.game.yCanvasMax);
  

}

Stage.prototype.backControl = function(){
  
    this.imgStage.src = "./imagenes/instrucciones1.png";
  
}