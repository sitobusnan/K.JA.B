function Game(canvasId){
  this.canvas = document.getElementsByClassName(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.background = new Background(this);
}

Game.prototype.start() = function (){


}