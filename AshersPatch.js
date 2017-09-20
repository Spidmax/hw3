function AshersPatch(x, y) {
  
  colorMode(RGB);
  
  //background
	fill(255);
  noStroke();
  rect(x, y, 100, 100);
  
	//bezier
  noFill();
  stroke(255, 102, 0);
  strokeWeight(2);
  bezier(x+98, y+1, x+30, y, x+70, y+99, x+1, y+99);
  
  //border
  stroke(0);
  strokeWeight(1);
  rect(x, y, 100, 100);
  
  //O
  noStroke();
  fill(0, 0, 0, 10);
  ellipseMode(CORNER);
  ellipse(x+10, y+10, 80, 80);
  
  //A
  triangle(x+50, y+10, x+10, y+90, x+90, y+90);
  
  //R
  rect(x+10, y+10, 80, 40);
  
  //text
  textSize(10);
  fill(0);
	text("YAY!", x+39, y+48);
	text("SO MUCH FUN", x+13, y+60);
  
}
