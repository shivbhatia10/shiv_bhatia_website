// Class definition for Ripple
class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.alpha = 255;
  }

  // Update properties of the ripple
  update() {
    this.radius += 2; // Expansion rate of ripple
    this.alpha -= 5; // Fade rate
  }

  // Render the ripple on canvas
  draw(p) {
    p.noFill();
    p.strokeWeight(1);
    p.stroke(0, 63, 209, this.alpha);
    p.ellipse(this.x, this.y, this.radius * 2);
  }

  // Determine if the ripple is still visible
  isAlive() {
    return this.alpha > 0;
  }
}

// Only initialize p5 if on a desktop
if (window.innerWidth > 800) {
  new p5((p) => {
    let ripples = [];

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.background(0);
    };

    p.draw = () => {
      p.background(255);
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].update();
        ripples[i].draw(p);
        if (!ripples[i].isAlive()) {
          ripples.splice(i, 1);
        }
      }
    };

    p.mouseDragged = () => {
      ripples.push(new Ripple(p.mouseX, p.mouseY));
    };

    p.mouseClicked = () => {
      ripples.push(new Ripple(p.mouseX, p.mouseY));
    };
  }, "canvas-container");
}
