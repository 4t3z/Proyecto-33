const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
  var canvas = createCanvas(1315,625);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Platform(657.5,625,width,10);

  platform1 = new Platform(70,70,140,15);
  platform2 = new Platform(1245,70,140,15);
  platform3 = new Platform(657.5,70,400,15);
  platform4 = new Platform(857.5,37,15,80);
  platform5 = new Platform(70,70,140,15);
  platform6 = new Platform(70,70,140,15);
  platform7 = new Platform(70,70,140,15);
  platform8 = new Platform(70,70,140,15);
  platform9 = new Platform(70,70,140,15);
  platform10 = new Platform(70,70,140,15);
  platform11 = new Platform(70,70,140,15);
  platform12 = new Platform(70,70,140,15);
  platform13 = new Platform(70,70,140,15);
  platform14 = new Platform(70,70,140,15);
  platform15 = new Platform(70,70,140,15);
  platform16 = new Platform(70,70,140,15);
  platform17 = new Platform(70,70,140,15);
  platform18 = new Platform(70,70,140,15);
  platform19 = new Platform(70,70,140,15);
  platform20 = new Platform(70,70,140,15);
  platform21 = new Platform(70,70,140,15);
  platform22 = new Platform(70,70,140,15);
  platform23 = new Platform(70,70,140,15);

  player = new Player(70,65);
}
function draw(){
  background(15,19,39);
  Engine.update(engine);

  platform1.display();
  platform2.display();
  platform3.display();
  platform4.display();
  platform5.display();
  platform6.display();
  platform7.display();
  platform8.display();
  platform9.display();
  platform10.display();
  platform11.display();
  platform12.display();
  platform13.display();
  platform14.display();
  platform15.display();
  platform16.display();
  platform17.display();
  platform18.display();
  platform19.display();
  platform20.display();
  platform21.display();
  platform22.display();
  platform23.display();

  ground.display();

  player.display();

  drawSprites();
}
function keyPressed(){
  if(keyCode === 32){
    player.body.position.y - 10;
  }
  if(keyCode === 100){
    player.distance += 10;
  }
  if(keyCode === 97){
    player.body.position.x - 10;
  }
}