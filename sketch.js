function setup() {
  // Target the specific container div we created in our HTML
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container');
}

function draw() {
  // A slightly transparent background creates beautiful motion trails
  background(11, 12, 16, 25); 
  
  // Custom design logic goes here!
  fill(102, 252, 241);
  noStroke();
  quad(mouseX, mouseY, 86, 50, 50, 38, 14, 50);
}

// Crucial for portfolios: Adjust the canvas instantly if the screen sizes change
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}