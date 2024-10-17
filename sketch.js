function setup() {
    createCanvas(500, 500);
    background("green");
  }
  
  function draw() {
   stroke("red");
    fill("pink");
    
    if(mouseIsPressed){
    rect(mouseX,mouseY, 20 ,35);
    }
  }