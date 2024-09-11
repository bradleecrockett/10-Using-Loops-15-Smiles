// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(600, 600);
  background(235);
  ellipseMode(CENTER);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background(235);
  // Your code below
}

function drawSmile(x, y) {
  stroke(0);
  fill("yellow");
  ellipse(x, y, 80, 80);
  noStroke();
  fill("black");
  ellipse(x - 10, y - 10, 10, 20);
  ellipse(x + 10, y - 10, 10, 20);
  fill("red");
  ellipse(x, y + 10, 60, 30);
  fill("yellow");
  rect(x, y, 60, 15);
}
