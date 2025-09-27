let balls = [];
let colour;

function setup() {
  createCanvas(400, 400);
  // make 2 balls to start
  for (let n = 0; n < 4; n++ ){
    balls.push(new Ball(random(width), random(height)));
  }
    colour = (240);
}

function draw() {
  background(250,10);

  // update & display each ball
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show();
    // check collision with others
    balls[i].checkCollision(balls);
  }
}

class Ball {
  constructor(x, y) {
    this.r = random(30, 40);
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }

  move() {
    this.pos.add(this.vel);
    // wrap around edges
    if (this.pos.x < +this.r) {this.vel.x *= -1;
          this.vel.y *= -1; }
    if (this.pos.x > width - this.r) {this.vel.x *= -1;
          this.vel.y *= -1; }
    if (this.pos.y < +this.r) {this.vel.x *= -1;
          this.vel.y *= -1; }
    if (this.pos.y > height - this.r) {this.vel.x *= -1;
          this.vel.y *= -1; }
  }

  show() {

    fill(colour);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  checkCollision(others) {
    for (let i = 0; i < others.length; i++) {
      // Make sure we do not compare the ball to itself
      if (others[i] !== this) {
        let other = others[i];
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.r + other.r) {
          colour = color(random(255),random(255),random(255));
          
          this.vel.y *= -1;          
        }
      }
    }
  }
}
