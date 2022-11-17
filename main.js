let canvas;
function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0, 0, 'fixed')
  canvas.style('z-index', '-1')
}

let t = 0
function draw() {
  translate(width/2, height/2);
  stroke(
    (t*t*t)%255,
    (t*t)%255,
    (t*t*t*t)%255
  );
  // fill(255);
  noFill();
  strokeWeight(5);
  beginShape();
  for (let i = 0; i < 4; i++) {
    vertex(
      600 * cos(t/4) * cos(t/10 + i*(5)) * sin(t/5), 
      400 * sin(t/4) * sin(t/10 + i*(5)) * sin(t/5)
    );
  }
  endShape(CLOSE);
  
  t+=0.15;
}

