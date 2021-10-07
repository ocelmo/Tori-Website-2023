/*global createCanvas, background, rect, fill, noStroke, width, stroke, strokeWeight, line,
ellipse, keyCode, keyIsPressed, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW, triangle,*/
var xposition;
var yposition;

function setup() {
  createCanvas(500, 500);
  background(242,193,140);
  // tomato
noStroke();
fill(224, 90, 90);
ellipse(150, 200, 150, 150);
ellipse(212, 200, 150, 150);
fill(48, 130, 31);
rect(176, 103, 12, 32); 
xposition = 0;
yposition = 0;
}

draw = function() {
     fill(242, 193, 140);
ellipse(mouseX, mouseY, 40, 40);
fill(23, 163, 28);
rect(176, 103, 12, 32); 


};


