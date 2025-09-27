
let shapeColor;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  background(250);
  shapeColor = color("#ccc09f");
}

function draw() {
  shapeColour = color("#ccc09f");
  print("pet me")
  fill(shapeColor);
  noStroke();
  // Body
  ellipse(200, 280, 120, 100);
  
  // Head
  ellipse(200, 200, 100, 90);
  
  // Ears
  triangle(150, 180, 150, 145, 190, 170); // Left ear
  triangle(250, 180, 245, 140, 210, 170); // Right ear

  
  // Eyes
  fill(0);
  ellipse(180, 205, 10, 10); // Left eye
  ellipse(220, 205, 10, 10); // Right eye
  
  // Nose
  fill("#d99c64");
  ellipse(200, 205,10);
  
  //Mouth
  fill("#d13d5a");
  ellipse(200,220,12,10);
  
  fill(shapeColor);
  ellipse(154,245,30);
  ellipse(254,245,30);
  
  if (mouseX <= 200 ) {
    fill("#d13d5a");
    ellipse(200,220,12,10);
    
    fill(shapeColor);
    ellipse(154,245,30);
    ellipse(254,245,30);
  }
  else {
    fill("#d13d5a");
    ellipse(200,220,30);
    

  }


	
if (keyIsPressed){
  switch (key) {
    case '1':
      shapeColor = color("#666e75");
      break;    
     
  }
}
}




  
function mousePressed() {
    saveCanvas("activity1b-image", "jpg");
}
