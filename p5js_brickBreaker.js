var br = 10; //Ball Radius
var pw = 100; //Paddle Width
var ph = 14; //Paddle Height
var brickWidth = 60;
var brickHeight = 30;
var ballMoving = false; //True if ball is moving, false if ball is attached to paddle.
var bricks = [];
var rows = 6;
var columns = 12;

function setup() {
  createCanvas(1000, 800);
  paddle = new Paddle (width*0.5 - pw*0.5, height - 60); //Starting pos. for the paddle.
  ball = new Ball();

  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      bricks[i*rows + j] = new Bricks((i+1)*brickWidth+80, (j+1)*brickHeight+80), bricks.rancol, bricks.rancol2, bricks.rancol3;
    }
  }
}

function draw() {
  background(0, 100, 155);
  fill(50);
  rect(0, height-60+paddle.ph, width, 60-paddle.ph); //Paints the bottom 
  paddle.display();
  paddle.move();
  ball.display();
  ball.move();

  for (var i = 0; i < bricks.length; i++) {
    bricks[i].display();
  }
}

function keyReleased() {
  paddle.setDir(0);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    paddle.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    paddle.setDir(-1);
  } else if (keyCode === UP_ARROW) {
    ball.speedX = ball.speedX;
    ball.speedY = ball.speedY;
    ballMoving = true;
  }
} 
//Known bugs: