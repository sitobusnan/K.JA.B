function Enemy(game){
  this.game = game;
  this.xEnemy = 600;
  this.yEnemy = 400;
  this.wEnemy = 50;
  this.hEnemy = 50;
  this.enemySpeed = 1;
  this.moduleCounter = 0;

  this.imgEnemy = new Image();
  this.imgEnemy.src = "./imagenes/enemy2.png";
}

Enemy.prototype.drawEnemy = function(){
  this.game.ctx.drawImage(this.imgEnemy, this.xEnemy, this.yEnemy, this.wEnemy, this.hEnemy);
  
}

Enemy.prototype.enemyMove = function(){
  this.moduleCounter++;
  if(this.moduleCounter % 10 === 0){
    if(this.xEnemy > this.game.player.xPlayer){
      this.xEnemy -= this.enemySpeed;
      this.imgEnemy.src = "./imagenes/enemy2.png"
    }else{
      this.xEnemy += this.enemySpeed;
      this.imgEnemy.src = "./imagenes/enemy1.png"
    }
    if(this.yEnemy - this.game.player.xPlayer > 1){
      if(this.yEnemy > this.game.player.yPlayer){
        this.yEnemy -= this.enemySpeed;
        this.imgEnemy.src = "./imagenes/enemy4.png"
      }else{
        this.yEnemy += this.enemySpeed;
        this.imgEnemy.src = "./imagenes/enemy3.png"
      }
      
    
    }
  }
  
}
