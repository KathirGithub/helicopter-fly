
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopter, helicopter_image
var obstacle,obstacle1,obstacle2


function preload(){

helicopter_image = loadImage('flyer.png')

}



function setup() {
  createCanvas(400,400);
  

  
  
  engine = Engine.create();
  world = engine.world;
  

  helicopter = createSprite(200,350,100,100);
  helicopter.addImage('fly',helicopter_image);
  helicopter.scale = 0.1;


  obstacle1 = new Box(100,200,100,20);
  obstacle = new Box(300,200,100,20);
  obstacle2 = new Box(200,100,100,20);

  

}


function draw() 
{
  background(51);
  Engine.update(engine);
  obstacle1.display();
  obstacle.display();
  obstacle2.display();
 
  if (keyIsDown(RIGHT_ARROW)){
    helicopter.x = helicopter.x + 1
  }

  if (keyIsDown(LEFT_ARROW)){
    helicopter.x = helicopter.x - 1
  }

  if (keyIsDown(UP_ARROW)){
   helicopter.y = helicopter.y - 1
  }
  
  drawSprites();


  
}

function hForce()
{
  Matter.Body.applyForce(helicopter.body,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(helicopter.body,{x:0,y:0},{x:0,y:-0.05});
}



