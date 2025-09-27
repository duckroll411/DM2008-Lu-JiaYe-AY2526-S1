let cookie;
let flavor = ["#b58a4e","#87b05f","#e3b28d"];
let flavorIndex = 0



function setup() {
  createCanvas(400, 400);
  noStroke();
  // make one cookie object
  cookie = new Cookie(flavor, 120, width/2, height/2);
}

function draw() {
  background(230);
  cookie.show();   // call the method on our object
}

// Class definition
class Cookie {
  constructor(flavor, sz, x, y) {
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

  // Method: draw the cookie using its own data
  show() {

    fill(flavor[flavorIndex]);
    ellipse(this.x, this.y, this.sz);

    // a few "chips" placed relative to size
    const s = this.sz * 0.1;
    fill(60);
    ellipse(this.x - this.sz*0.22, this.y - this.sz*0.15, s);
    ellipse(this.x + this.sz*0.18, this.y - this.sz*0.10, s);
    ellipse(this.x - this.sz*0.05, this.y + this.sz*0.12, s);
    ellipse(this.x + this.sz*0.20, this.y + this.sz*0.18, s);
  }
}

function keyPressed() {
  if (key === 'd' || key === 'D') {
  cookie.x += 10;
  }  
  if (key === 'a' || key === 'A') {
  cookie.x -= 10;
  } 
  if (key === 'w' || key === 'W') {
  cookie.y -= 10;
  } 
  if (key === 's' || key === 'S') {
  cookie.y += 10;
  } 
}

  
function mousePressed() {
  flavorIndex ++;
  if (flavorIndex >= flavor.length) {
    flavorIndex = 0;
  }
}