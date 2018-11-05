function Background(game){
  this.game = game;
  this.img = new Image();
  this.img.src = "./imagenes/background1.jpg";
}

Background.prototype.drawBack = function (){
  this.game.ctx.drawImage(this.img,0,0,700,500);
  
}