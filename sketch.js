function setup() {
    createCanvas(400, 400);
  
  }
  var x = 0,y=80;
  
  function draw() {
    //background(0);
    stroke(random(255), random(255), random(255));
    fill(random(255), random(255), random(255), 75);
  
    ellipse(x, y, 20, 20);
  
    x++;
  }
  
  function mousePressed() {
    background(0);
    x=mouseX;
    y=mouseY;
  }