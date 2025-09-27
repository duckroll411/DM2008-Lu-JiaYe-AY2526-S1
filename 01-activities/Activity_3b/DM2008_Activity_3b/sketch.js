let angle = 0;
let speed = 0; // Speed of rotation
let palette = ["#f06449", "#009988", "#3c78d8", "#ffeb3b"];
let currentIndex = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background("#ebe2cc");
  

  const spacing = width / (palette.length + 1);
  for (let i = 0; i < palette.length; i++) {
    noStroke();
    fill(palette[i]);
    const x = (i + 1) * spacing;
    rect(x, height - 30, 30, 30);
  }
  
  angle += speed;
  fill(palette[currentIndex]);
  rect (width / 2, height/2,200)

  fill(20);
  ellipse(width / 2, height / 2, 200, 200);

  push();
  translate(width / 2, height / 2);
  rotate(radians(angle));
  drawFlower(0, 0, 100, 100);
  pop();


  
}

//function mousePressed() {
  //currentIndex = (currentIndex + 1) % palette.length;
//}

function keyPressed() {
  switch (key) {
    case 'r':
      speed = 1;
      currentIndex = 0;
      break;
    case 'g':
      speed = 5;
      currentIndex = 1;
      break;
    case 'b':
      speed = 10;
      currentIndex = 2;
      break;
    case 'y':
      speed = 20;
      currentIndex = 3;
      break;
    case 's':
      speed = 0;
      break;
  }
}

function drawFlower(x, y, w, h) {
  noStroke();
  fill("#c0c9cc");
  ellipse(x, y, w, h); 
  fill("#ebf1f2");
  ellipse(x, y - h, w / 3, h * 1.5); 
  ellipse(x, y + h, w / 3, h * 1.5); 
  ellipse(x - w, y, w * 1.5, h / 3); 
  ellipse(x + w, y, w * 1.5, h / 3); 
}


function mousePressed() {
    saveCanvas("activity3b-image", "jpg");
}
