function Stage (game){
  this.game = game;
  this.stageControl = 0;

  this.imgStage = new Image();
  this.imgStage.src = "./imagenes/logo.png";
}

Stage.prototype.drawStage = function(){
    this.imgStage.onload = function() {

      this.game.ctx.drawImage(this.imgStage, 0, 0, this.game.xCanvasMax, this.game.yCanvasMax);
    }.bind(this)
  

}

