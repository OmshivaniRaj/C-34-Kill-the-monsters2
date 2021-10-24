class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 450,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
    
  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      push();
      
      //set the value of stroke to hide the rope
      
      stroke(98,182,242); 
      strokeWeight(0);
      fill("lightBlue");
          
        line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
      pop();
    }
  }
}
