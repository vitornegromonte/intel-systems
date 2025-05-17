let targetX;
let targetY;
let targetsReached = 0;

function setup() {
  createCanvas(500, 500);
  targetX = random(width);
  targetY = random(height);
  vehicle = new Vehicle(200, 200);
}

function draw() {
  background(0);
  
  noStroke();
  fill(255, 255, 255)
  ellipse(targetX, targetY, 15, 15);
  
  vehicle.seek(targetX, targetY)
  let d = dist(vehicle.x, vehicle.y, targetX, targetY);
  if (d < 10) {
    targetX = random(width);
    targetY = random(height);
    targetsReached++;
  }
  
  fill(0,255,0);
  text("Coletados: " + targetsReached, 15, 20);
  vehicle.show(targetX, targetY);
}
