function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235);
   fill("yellow"); //yellow  

  stroke("orange"); //orange outline 

  strokeWeight(20); //large outline  
  circle(550, 50, 100);
stroke(0);//black outline

  strokeWeight(1);//outline thickness

  fill("#F44336");

  rect(0, 200, 600, 200);
  textSize(75)
  text("🌸", 100, 250) //flower
  text("🐞", mouseX, mouseY) //ladybug
  fill("#2025E4")
  text("HELLO", 200, 50, 800)
}