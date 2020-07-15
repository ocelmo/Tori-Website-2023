/*global createCanvas, background, rect, fill, noStroke, width, stroke, strokeWeight, line,
ellipse, keyCode, keyIsPressed, LEFT_ARROW, RIGHT_ARROW,*/

var size;
var increase

function setup() {
  createCanvas(800, 500);
  background(255, 170, 0);
  size = 30;
  increase = true;
}
  
function draw() {
fill(255, 204, 0);
ellipse(400, 400, size, size);
noStroke();
fill(76, 175, 67);
rect(0, 400, 800, 300);
 if(increase == true){
  size += 1}

  
  if(size == 500){
    increase = false;
    background(82,222,240)
    fill(255, 204, 0);
  ellipse(400, 400, size, size);

  fill(76, 175, 67);
  rect(0, 400, 800, 300);
  }
}

