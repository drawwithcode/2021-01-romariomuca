function setup() {
  //IT'S executed only time
  createCanvas(windowWidth, windowHeight);
  background("black");
  frameRate(12); //the sketch will render 12 frames x second
  angleMode(degrees);
}

function draw() {
  //put drawing code here
  //I can put all the informations about stroke and fill.
  translate(width / 2, height / 2);
  // Every frame, it makes a rotation of 3 degrees
  rotate(frameCount * 0.3);

  noFill();

  stroke(255, 255, 255);
  ellipse(100, 0, 650, 650);
  ellipse(100, 0, 450, 450);
  ellipse(100, 0, 250, 250);
  ellipse(23, 23, 123, 123);

  stroke(255, 0, 0);
  ellipse(2, 2, 12, 12);

  stroke(255, 0, 0);
  ellipse(233, 233, 132, 123);
}
