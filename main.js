// Class definition for Ripple
class Circle {
  constructor(position, velocity, radius, r, g, b) {
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
    this.color = color(r, g, b, 100);
  }

  update() {
    this.position.add(this.velocity);
    if (this.position.x < this.radius || this.position.x > width - this.radius) {
      this.velocity.x *= -1;
    }
    if (this.position.y < this.radius || this.position.y > height - this.radius) {
      this.velocity.y *= -1;
    }
  }

  draw() {
    noFill();
    stroke(this.color);
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }
}

let circles = [];
let NUM_CIRCLES = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NUM_CIRCLES; i++) {
    let radius = random(10, 50);
    let position = createVector(random(radius, width - radius), random(radius, height - radius));
    let velocity = createVector(random(-1, 1), random(-1, 1));
    let g = random(255);
    let r = 0;
    let b = 255;
    circles.push(new Circle(position, velocity, radius, r, g, b));
  }
  strokeWeight(2);
}

function draw() {
  background(255);
  for (let circle of circles) {
    circle.update();
    circle.draw();
  }
}
