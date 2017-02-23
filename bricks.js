function Bricks(x, y, rancol, rancol2, rancol3) 
{
  this.x = x;
  this.y = y;
  this.brickWidth = brickWidth;
  this.brickHeight = brickHeight;
  this.rancol = random(255);
  this.rancol2 = random(255);
  this.rancol3 = random(255);
}

//Testing to adding the display function into 'Prototype'
//This will make the function be stored only once, and not in all of the bricks.

Bricks.prototype.display = function() {
  fill(this.rancol, this.rancol2, this.rancol3);
  //fill(255, 0, 200, 150);
  rect(this.x, this.y, this.brickWidth, this.brickHeight);
}