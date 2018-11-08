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


// CONTROLA QUE CARTEL SE MUESTRA
Stage.prototype.stageControl = function(){
  if(this.stageCounter === 1){
    this.imgStage.src = "./imagenes/STAGE1.png";
  }
  if(this.stageCounter === 2){
    this.imgStage.src = "./imagenes/instrucciones1.png";
  }
  if(this.stageCounter === 4){
    this.imgStage.src = "./imagenes/finfase1.png";
    this.game.claps.play();
  }
  if(this.stageCounter === 5){
    this.imgStage.src = "./imagenes/STAGE2.png";
  }
  if(this.stageCounter === 6){
    this.imgStage.src = "./imagenes/instrucciones2.png";
  }

  if(this.stageCounter === 8){
    this.imgStage.src = "./imagenes/finfase2.png";
    this.game.claps.play();
  }
  if(this.stageCounter === 9){
    this.imgStage.src = "./imagenes/ati.png";
    this.game.gamer.pause();
    this.game.end.play();
  }
  
}

