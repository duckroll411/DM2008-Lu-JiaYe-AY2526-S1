// DM2008
// Activity 1b (Georg Nees)
let clist = ['#b9ebed','#364175'];

let x;
let y;
let w;

function setup() {
  createCanvas(800, 800)
  background(250);
  rectMode (CENTER);
 
}

function draw() {
  
   
  x = random(width);
  y = random(height);
  w = random(10, 20);
  
  // background(240,40);
  
  noStroke(0);
  fill(random(clist));
  ellipse(x, y, w, w);
  x += 10
 

  x = 0;

  background(250,10);
  


  x = mouseX;
  y = mouseY;

  noStroke

  // Worm body
  fill('#b9ebed');
  ellipse(x, y, 60, 60);


  // Eye
  fill(255);
  ellipse(x + 15, y - 10, 30, 30);
  fill(0);
  ellipse(x + 15, y - 10, 10, 10);
  


  // noStroke(0);
  // fill('#b9c5ed');
  // rect(mouseX, mouseY, 80, 80);
  


  
  

}






function keyPressed() {
    saveCanvas("activity1b-image", "jpg");
}