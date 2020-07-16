function setup() {
  createCanvas(800, 500);
  background(100, 100, 100);
  position = 0;
}

function draw() {
  background(128, 212, 255);
  noStroke();
  fill(153, 77, 0);
  rect(0, 250, width, 250);
  fill(0);
  rect(0, 300, width, 150);

  stroke(255);
  strokeWeight(5);
  line(0, 375, 50, 375);
  line(100, 375, 150, 375);
  line(200, 375, 250, 375);
  line(300, 375, 350, 375);
  line(400, 375, 450, 375);
  line(500, 375, 550, 375);
  line(600, 375, 650, 375);
  line(700, 375, 750, 375);
  line(800, 375, 850, 375);

  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  rect(110 + position, 285, 80, 50);
  fill(222, 255, 8);
  ellipse(110 + position, 340, 30);
  ellipse(190 + position, 340, 30);

  if (keyIsPressed && keyCode == LEFT_ARROW) position--;

  if (keyIsPressed && keyCode == RIGHT_ARROW) position++;

  fill(255);
  ellipse(100 - position, 60, 50, 50);
  ellipse(140 - position, 40, 50, 50);
  ellipse(170 - position, 70, 50, 50);
  ellipse(130 - position, 80, 50, 50);

  ellipse(400 - position, 160, 50, 50);
  ellipse(440 - position, 140, 50, 50);
  ellipse(470 - position, 170, 50, 50);
  ellipse(430 - position, 180, 50, 50);
}

