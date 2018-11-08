//todo: consider adding multiple backgrounds and get them from the GameConfig object
//todo: consider using an object for this functionality rather than a function
// let BackgroundManager = {
//   setBackground: function(type) {

//   }
// }
function Background(game){
  this.game = game;
  this.img = new Image();
  this.img.src = "./imagenes/background1.png";
}

Background.prototype.drawBack = function (){
  this.game.ctx.drawImage(this.img,0,0,this.game.xCanvasMax,this.game.yCanvasMax);
}