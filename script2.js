/*global createCanvas, background, rect, fill, noStroke, width, stroke, strokeWeight, line,
ellipse, keyCode, keyIsPressed, LEFT_ARROW, RIGHT_ARROW,*/
var xposition;
var yposition;

function setup() {
  createCanvas(800, 500);
  background(102,255,255);
  xposition = 0;
  yposition = 0;
}

function draw() {
  background(128, 212, 255);
  strokeWeight(2);
  stroke(255);
  fill(255,187,51);
  ellipse(110 + xposition, 285 + yposition, 80, 50);
  fill(0);
 

  if (keyIsPressed && keyCode == LEFT_ARROW) xposition--;

  if (keyIsPressed && keyCode == RIGHT_ARROW) xposition++;
  
  if (keyIsPressed && keyCode == UP_ARROW) yposition++;
  
  if(keyIsPressed && keyCode == DOWN_ARROW) yposition--;
  
}

