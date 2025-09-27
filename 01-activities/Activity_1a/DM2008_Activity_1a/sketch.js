// DDM2008
// Activity 1a

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature in the space provided

let clist = ['#3248a8','#b02121','#e0dd22'];

function setup() {
  createCanvas(400, 400);
  
  noLoop();
}

function draw() {

  
  background(250);

  stroke(0);
  strokeWeight(3);
  
  fill(random(clist));
  rect(20,100,200,200);
  
    
  fill(random(clist));
  ellipse(random(width),random(height),random(50,100));
  
    
  fill(random(clist));
  rect(random(width),random(height),random(50,100));
  
      
  fill(random(clist));
  rect(random(width),random(height),random(40,400));
  
  fill(random(clist));
  rect(random(width),random(height),random(20,20));
  
  stroke(10);
  line(random(width),random(height),random(100,400),random(100,400));
  

  helperGrid(); // do not edit or remove this line
}

function mousePressed() {
    saveCanvas("activity1a-image", "jpg");
}
  