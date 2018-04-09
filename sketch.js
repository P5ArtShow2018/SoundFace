var mic;

function setup() {
  createCanvas (windowWidth,windowHeight);
  mic = new p5.AudioIn ()
  mic.start ();
}

function draw() {
  background (255);
  micLevel = mic.getLevel ();
  var adjustedMicLevel1 = micLevel * 1000
  var adjustedMicLevel2 = micLevel * 1000
  var adjustedMicLevel3 = micLevel * 1000
  fill (205,25,adjustedMicLevel1);
  strokeWeight (25);
  ellipse (500,500,800);
  strokeWeight (10);
  fill (adjustedMicLevel3, 87, random (1,255));
  rect (300,400,100, adjustedMicLevel2);
  rect (600,400,100, adjustedMicLevel2);
  strokeWeight (5);
  fill (65,56,150);
  ellipse (500,700,200,adjustedMicLevel2);
}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight);
}