function Background(game){
  this.game = game;
  var img = new Image();
  img.src = "./imagenes/background1.jpg";
}

Background.prototype.drawBack = function (){
  this.ctx.drawImage(img,0,0);
}