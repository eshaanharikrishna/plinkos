class Division {
    constructor(x,y,width,height) {
      var options = {
         restitution:0.3,density:1.2,friction:1,isStatic:true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width=width
      this.height=height
     this.color=color(random(0,255),random(0,255),random(0,255),)
      World.add(world, this.body);
       
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect( pos.x, pos.y, this.width, this.height);
    }
  };
