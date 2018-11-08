function Enemy(game) {
  this.game = game;
  this.xEnemy = 600;
  this.yEnemy = 400;
  this.wEnemy = 50;
  this.hEnemy = 50;
  this.enemySpeed = 2;
  
  this.enemyTarjet = 0;

  this.imgEnemy = new Image();
  this.imgEnemy.src = "./imagenes/enemy3.png";

  
}

Enemy.prototype.drawEnemy = function() {
  this.game.ctx.drawImage(
    this.imgEnemy,
    this.xEnemy,
    this.yEnemy,
    this.wEnemy,
    this.hEnemy
  );
};
//todo: consider adding a CollisionManager class

//todo: consider removing duplications in the code, find patterns as you code
// function sito(img, xspeed, yspeed) {
//   this.imgEnemy.src = "./imagenes/enemy8.png";

//   if (xspeed === true) this.xEnemy += this.enemySpeed
//   else this.xEnemy -= this.enemySpeed

//   if (yspeed === true) this.yEnemy += this.enemySpeed
//   else this.xEnemy -= this.enemySpeed
// }
// MOVIMIENTO DEL ENEMY
Enemy.prototype.enemyMove = function() {
  
  if (this.game.moduleCounter % 5 === 0) {
    if (this.enemyTarjet === 0) {
      if (
        this.xEnemy != this.game.player.xPlayer &&
        this.yEnemy != this.game.player.yPlayer
      ) {
        if (
          this.xEnemy > this.game.player.xPlayer &&
          this.yEnemy > this.game.player.yPlayer
        ) {
          this.imgEnemy.src = "./imagenes/enemy5.png";

          this.xEnemy -= this.enemySpeed;

          this.yEnemy -= this.enemySpeed;
        }
        if (
          this.xEnemy > this.game.player.xPlayer &&
          this.yEnemy < this.game.player.yPlayer
        ) {
          this.imgEnemy.src = "./imagenes/enemy7.png";
          this.xEnemy -= this.enemySpeed;
          this.yEnemy += this.enemySpeed;
        }
        if (
          this.xEnemy < this.game.player.xPlayer &&
          this.yEnemy > this.game.player.yPlayer
        ) {
          this.imgEnemy.src = "./imagenes/enemy6.png";
          this.xEnemy += this.enemySpeed;
          this.yEnemy -= this.enemySpeed;
        }
        if (
          this.xEnemy < this.game.player.xPlayer &&
          this.yEnemy < this.game.player.yPlayer
        ) {
          this.imgEnemy.src = "./imagenes/enemy8.png";
          this.xEnemy += this.enemySpeed;
          this.yEnemy += this.enemySpeed;
        }
      } else {
        if (this.xEnemy > this.game.player.xPlayer) {
          this.imgEnemy.src = "./imagenes/enemy2.png";
          this.xEnemy -= this.enemySpeed;
        }
        if (this.xEnemy < this.game.player.xPlayer) {
          this.imgEnemy.src = "./imagenes/enemy1.png";
          this.xEnemy += this.enemySpeed;
        }
        if (this.yEnemy > this.game.player.yPlayer) {
          this.imgEnemy.src = "./imagenes/enemy4.png";
          this.yEnemy -= this.enemySpeed;
        }
        if (this.yEnemy < this.game.player.yPlayer) {
          this.imgEnemy.src = "./imagenes/enemy3.png";
          this.yEnemy += this.enemySpeed;
        }
      }
    }
    if(this.enemyTarjet === 1){
      if(this.yEnemy < this.game.yCanvasMax - this.hEnemy){
        this.imgEnemy.src = "./imagenes/enemy3.png";
        this.yEnemy += this.enemySpeed
      }
      if(this.yEnemy > this.game.yCanvasMax - this.hEnemy - 1){
        this.imgEnemy.src = "./imagenes/enemy2.png";
      }
    }
  }
};
