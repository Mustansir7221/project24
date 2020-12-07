class Box {
    constructor(x, y, width, height) {

      var option={
        restitution:0.3,
        density:1.2,
        friction:0.5
      };
    
      this.body = Bodies.rectangle(x, y, width, height,option);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      
      ellipseMode(CENTER);
      fill("red");
      ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
     
    }
  }
  