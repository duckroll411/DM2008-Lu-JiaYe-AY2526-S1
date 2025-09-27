// DM2008 — Activity 4b
// Objects in Motion (60 min)

// ============================
// Step 0: Global data
// ============================
let agents = []; // array to hold many objects
const NUM_START = 5; // you can tweak this

function setup() {
  createCanvas(600, 400);
  noStroke();
  colorMode(HSB, 360, 100, 100, 255);

  // ============================
  // Step 1: Populate the array
  // - Use a loop to create multiple instances
  // - Give each instance some randomized starting values
  // ============================
  for (let i = 0; i < NUM_START; i++) {
    let x = random(width);
    let y = random(height);
    let sz = random(40, 90);
    let speedX = random(-2, 2);
    let speedY = random(-2, 2);
    // TODO: pass any extra properties you plan to use
    agents.push(new Agent(x, y, sz, speedX, speedY));
  }
}

function draw() {
  background(0);


  for (let i = 0; i < agents.length; i++) {
    agents[i].update(); // change over time
    agents[i].show(); // draw
  }


  // ============================
  for (let i = agents.length - 1; i >= 0; i--) {
    if (agents[i].sz <= 2) {
      agents.splice(i, 1);
    }
  }
}

// ============================
// Step 4: Interaction (optional)
// - Add new objects with mouse clicks
// - Toggle behaviors with keys
// ============================
function mousePressed() {
  let sz = random(40, 90);
  let speedX = random(-2, 2);
  let speedY = random(-2, 2);
  agents.push(new Agent(mouseX, mouseY, sz, speedX, speedY));
  

}

function keyPressed() {
  // Example toggles—feel free to customize
  if (key === "C"||key === "c") {
    agents = [];
  }
  if (key === "R"||key === "r") {
  for(let ag of agents){
    ag.h += 30
  }
}
}

// ============================
// Step 5: Define your Class
// - Must have at least 1 property that changes over time
// - Must have at least 1 method besides show()
// - Feel free to add more properties/methods
// ============================
class Agent {
  constructor(x, y, sz, speedX, speedY) {
    // Required properties
    this.x = x;
    this.y = y;
    this.sz = sz;

    // Motion
    this.dx = speedX;
    this.dy = speedY;

    // Style (customize!)
    this.h = random(360);
    this.a = 220;
  }

  // Method #1: update — change over time
  update() {

    this.x += this.dx;
    this.y += this.dy;
    
    this.h = (this.h + 1)%360;


    if (this.x < 0 || this.x > width) {
      this.dx *= -1;
      this.sz -=10;
    }
    if (this.y < 0 || this.y > height) {
      this.dy *= -1;
      this.sz -=10;
    }
  }

 
  show() {

    fill(this.h, 80, 100, this.a);
    ellipse(this.x, this.y, this.sz);
    
  }
}

/* ============================
   TODO ideas (pick at least one):
   - Add a second method besides show(), e.g., bounce(), shrink(), changeColor()
   - Make one property evolve over time (size, hue, alpha, speed)
   - Add a key or mouse interaction that changes *all* agents (loop over array)
   - Implement removal: shrink agents and splice them when too small
============================= */
