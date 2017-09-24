strokeWeight(3);
stroke(0);
noFill();

x = 0;

while (x < 200) {
  background(255);
  ellipse(100+x, 100, 50, 50)
	x = x + 10;
}

while (x > -80) {
	background(255);
  ellipse(100+x, 100, 50, 50)
	x = x - 10;
}
