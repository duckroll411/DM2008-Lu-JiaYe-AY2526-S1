// DM2008 — Activity 2b
// (Pattern Making, 40 min)

let yposition = 200;   
let speed = 3;   
let c = ("#cf03fc")

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250,10)

  yposition += speed;

  if (yposition > height - 50 || yposition < 0) {
    speed *= -1;
    
  }



  for (let i = 0; i < width; i += 50) {
    if (i % 100 == 0) {
      noStroke();
      fill(120);   
    }
    else if (mouseIsPressed) {
      
    rect(i + 0, yposition, 50); 
    fill(c); 
    } 
    
    else {
      fill(0); 
    }
    rect(i + 0, yposition, 50);   
  
  }  
}

function keyPressed() {
    saveCanvas("activity2b-image", "jpg");
}
