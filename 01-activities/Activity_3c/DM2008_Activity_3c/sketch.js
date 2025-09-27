// DM2008 — Activity 3b
// (Painting App, 50 min)

// 1) Palette + size
const palette = ["#f06449", "#009988", "#3c78d8", "#eeeeee"];
let colorIndex = 0;
let sizeVal = 20;

// 2) Brush registry (array of functions)
const brushes = [brushCircle, brushSquare,brushStreak,brushTripleLine,brushDiamond,brushSpray];
let currentBrush = 0; // 0, 1, or 2

function setup() {
  createCanvas(600, 600);
  background(240);
  rectMode(CENTER);
}

function draw() {
  // paint only while mouse is held
  if (mouseIsPressed) {
    const col = palette[colorIndex];
    // call the selected brush function
    brushes[currentBrush](mouseX, mouseY, col, sizeVal);
  }
}

// 3) Brush functions (students can customize/extend)
function brushCircle(x, y, c, s) {
  noStroke();
  fill(c);
  ellipse(x, y, s);
}

function brushSquare(x, y, c, s) {
  push();
  translate(x, y);
  noStroke();
  fill(c);
  rect(0, 0, s, s);
  pop();
}

function brushStreak(x, y, c, s) {
  stroke(c);
  strokeWeight(max(2, s / 8));
  point(x,y);3
}

function brushTripleLine(x, y, c, s) {
  stroke(c);
  strokeWeight(max(2, s / 10));
  line(x, y, x, y);
  line(x, y - s/2, x, y - s/2);
  line(x, y + s/2, x, y + s/2);
}

function brushDiamond(x, y, c, s) {
  push();
  translate(x, y);
  rotate(radians(45)); 
  noStroke();
  fill(c);
  rect(0, 0, s, s);
  pop();
}
function brushSpray(x, y, c, s) {
  noStroke();
  fill(c);

  // draw 3 dots with random offsets
  ellipse(x + random(-s/2, s/2), y + random(-s/2, s/2), s / 2);
  ellipse(x + random(-s/4, s/4), y + random(-s/4, s/4), s / 4);
  ellipse(x + random(-s/6, s/6), y + random(-s/6, s/6), s / 6);
  ellipse(x + random(-s/8, s/8), y + random(-s/8, s/8), s / 6);
}

// 4) Brush UI: select brush, cycle color, change size, clear
function keyPressed() {
  switch (key) {
    case '1':
      currentBrush = 0; // circle
      break;
    case '2':
      currentBrush = 1; // square
      break; 
    case '3':
      currentBrush = 2; // streak
      break;
    case '4':
      currentBrush = 3; // streak
      break;
    case '5':
      currentBrush = 4; // streak
      break;
    case '6':
      currentBrush = 5; // streak
      break;
  }
  if (key == 'C' || key == 'c') {
    colorIndex = (colorIndex + 1) % palette.length; // cycle color
  }
  if (key == '+' || key == '=') {
    sizeVal += 4;
  }
  if (key == '-' || key == '_') {
    sizeVal = max(4, sizeVal - 4);
  } 
  if (key == 'X' || key == 'x') {
    background(240); // clear canvas
    
//eraser
  } 
 if (key == 'E' || key == 'e') { 
   palette.push(240);  
   colorIndex = palette.length - 1;
//bucket
  }
 if (key == 'B' || key == 'b') { 
   background(palette[colorIndex])
 }
  // TODO: add an 'E' (eraser) mode by painting with background color
  // e.g., if eraserMode, use color(240) instead of palette[colorIndex]
}