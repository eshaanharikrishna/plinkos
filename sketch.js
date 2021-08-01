const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine
var world
var particles=[]
var plinkos=[]
var divisions=[]
var divisionheight=300





function setup() {
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
  ground=new Ground(400,790,800,20)
  for(var i=0;i<=800;i=i+80){
    divisions.push(new Division(i,650,10,300))

  }
  for(var j=75;j<=800;j=j+50){
    plinkos.push(new Plinko(j,75,10))
}
for(var k=50;k<=800;k=k+50){
  plinkos.push(new Plinko(k,175,10))
}



}





function draw() {
  background("black");
  Engine.update(engine)
  ground.display()  
  for(var j=0;j<=plinkos.length;j++){
  plinkos[j].display()
  
}
if(frameCount%60===0){
  particles.push(new Particles(random(100,700),10,10))

}
for(var k=0;k<=particles.length;k++){
  particles[k].display()
  
}
for(var l=0;l<=divisions.length;l++){
  divisions[l].display()
  
}


  drawSprites();



}