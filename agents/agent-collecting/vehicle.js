class Vehicle {
  constructor(w, h) {
    this.x = w/2;
    this.y = h/2;
  }

  seek(targetX, targetY) {
    // Distance from vehicle to target
    let xDiff = targetX - this.x;
    let yDiff = targetY - this.y;
  
    // Update the position using the speed (0.05) and the distance previously calculated 
    this.x = this.x + xDiff * 0.05;
    this.y = this.y + yDiff * 0.05;
  }

  show(targetX, targetY) {
    stroke(0, 255, 0)
    fill(0, 255, 0);
    
    let angle = Math.atan2(targetY - this.y, targetX - this.x);
    
    translate(this.x, this.y);
    rotate(angle);
    triangle(-16, -8, -16, 8, 16, 0);
  }
}