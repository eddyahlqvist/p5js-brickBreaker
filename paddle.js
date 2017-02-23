function Paddle(x, y) 
{
  this.x = x;
  this.y = y;
  this.xdir = 0;
  this.ph = ph; //Paddle Height 
  this.pw = pw; //Paddle Width

  this.display = function() {
    fill(255, 0, 200, 150);
    rect(this.x, this.y, this.pw, this.ph, 6);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*8;
    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.x + this.pw >= width) {
      this.x = width - this.pw;
    }
  }
}