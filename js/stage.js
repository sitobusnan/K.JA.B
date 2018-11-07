function Stage (game){
  this.game = game;
  this.stageCounter = 0;

  this.imgStage = new Image();
  this.imgStage.src = "./imagenes/logo.png";
}

Stage.prototype.drawStage = function(){
  this.game.stage.stageControl();
    this.imgStage.onload = function() {
      
      
      this.game.ctx.drawImage(this.imgStage, 0, 0, this.game.xCanvasMax, this.game.yCanvasMax);
    }.bind(this)
}

Stage.prototype.stageControl = function(){
  if(this.stageCounter === 1){
    this.imgStage.src = "./imagenes/STAGE1.png";
  }
  if(this.stageCounter === 2){
    this.imgStage.src = "./imagenes/instrucciones1.png";
  }
  if(this.stageCounter === 4){
    this.imgStage.src = "./imagenes/finfase1.png";
  }
  
}

