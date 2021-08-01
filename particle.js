class Particles {
    constructor(x,y,radius) {
      var options = {
         restitution:0.3,density:1.2,friction:1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
     this.color=color(random(0,255),random(0,255),random(0,255),)
      World.add(world, this.body);
       
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse( pos.x, pos.y, this.radius, this.radius);
    }
  };
