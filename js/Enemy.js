function Enemy(game) {
  this.game = game;
  this.xEnemy = 600;
  this.yEnemy = 400;
  this.wEnemy = 50;
  this.hEnemy = 50;
  this.enemySpeed = 1;
  this.moduleCounter = 0;

  this.imgEnemy = new Image();
  this.imgEnemy.src = "./imagenes/enemy3.png";
}

Enemy.prototype.drawEnemy = function() {
  this.game.ctx.drawImage(this.imgEnemy,this.xEnemy,this.yEnemy,this.wEnemy,this.hEnemy);
};

Enemy.prototype.enemyMove = function() {
  this.moduleCounter++;
  if (this.moduleCounter % 5 === 0) {
    if(this.xEnemy != this.game.player.xPlayer && this.yEnemy != this.game.player.yPlayer){
      if(this.xEnemy > this.game.player.xPlayer && this.yEnemy > this.game.player.yPlayer){
        this.imgEnemy.src = "./imagenes/enemy5.png"
      
        this.xEnemy -= this.enemySpeed;
        
        this.yEnemy -= this.enemySpeed;
      }
      if(this.xEnemy > this.game.player.xPlayer && this.yEnemy < this.game.player.yPlayer){
        this.imgEnemy.src = "./imagenes/enemy7.png"
        this.xEnemy -= this.enemySpeed;
        this.yEnemy += this.enemySpeed;
      }
      if(this.xEnemy < this.game.player.xPlayer && this.yEnemy > this.game.player.yPlayer){
        this.imgEnemy.src = "./imagenes/enemy6.png"
        this.xEnemy += this.enemySpeed;
        this.yEnemy -= this.enemySpeed;
      }
      if(this.xEnemy < this.game.player.xPlayer && this.yEnemy < this.game.player.yPlayer){
        this.imgEnemy.src = "./imagenes/enemy8.png"
        this.xEnemy += this.enemySpeed;
        this.yEnemy += this.enemySpeed;
      }
    }else{
      if(this.xEnemy > this.game.player.xPlayer){
        this.imgEnemy.src = "./imagenes/enemy2.png"
        this.xEnemy -= this.enemySpeed;
      }
      if(this.xEnemy < this.game.player.xPlayer){
        this.imgEnemy.src = "./imagenes/enemy1.png"
        this.xEnemy += this.enemySpeed;
      }
      if(this.yEnemy > this.game.player.yPlayer){
        this.imgEnemy.src = "./imagenes/enemy4.png"
        this.yEnemy -= this.enemySpeed;
      }
      if(this.yEnemy < this.game.player.yPlayer){
        this.imgEnemy.src = "./imagenes/enemy3.png"
        this.yEnemy += this.enemySpeed;
      }
    }
  }
};
