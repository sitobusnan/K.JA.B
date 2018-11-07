function Guardias(game, yGuard){
  this.game = game;
  this.xGuardMax = 850;
  this.xGuardMin = 0;
  this.xGuard = Math.floor(Math.random() * (this.xGuardMax - this.xGuardMin)+ this.xGuardMin );
  this.yGuard = yGuard;
  this.wGuard = 50;
  this.hGuard = 50;
  this.speedGuard = 1;

  this.imgGuard = new Image();
  this.imgGuard.src = "./imagenes/guardia2.png";


}

Guardias.prototype.drawGuard = function(){
  
  this.game.ctx.drawImage(this.imgGuard,this.xGuard,this.yGuard,this.wGuard,this.hGuard);
  
}

Guardias.prototype.moveGuard = function(){
  if(this.xGuard < this.xGuardMax && this.xGuard > this.xGuardMin){
    this.xGuard += this.speedGuard;
  }else{
    this.speedGuard *= -1;
    this.xGuard += this.speedGuard*2;
  }
  if(this.speedGuard < 0){
    this.imgGuard.src = "./imagenes/guardia2.png";
  }else{
    this.imgGuard.src = "./imagenes/guardia1.png"
  }

}