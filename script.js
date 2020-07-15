/*global createCanvas, background, rect, fill, noStroke, width, stroke, strokeWeight, line,
ellipse, keyCode, keyIsPressed, LEFT_ARROW, RIGHT_ARROW,*/

var size;

function setup() {
  createCanvas(800, 500);
  background(82, 222, 240);
  size = 30;
}
  
function draw() {
fill(255, 204, 0);
ellipse(200, 298, size, size);

fill(76, 175, 67);
rect(0, 500, 400, 800);
  
size += 1
}
