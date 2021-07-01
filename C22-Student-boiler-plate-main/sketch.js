const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var con;
var con1


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ball = Bodies.circle(200,50,10,ball_options);
  ball1 =Bodies.circle(200,100,15,ball_options)
  
  World.add(world,ball);
  World.add(world,ball1);
  
  
  
      
  
  
  
  con1 = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball1,
   // pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });

World.add(world,con1);
con = Matter.Constraint.create({
  bodyA: ball1,
  bodyB:ball,
  //bodyB:{x:0,y:0},
  length:100,
  stiffness:0.1
});

World.add(world,con);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball1.position.x,ball1.position.y,15);

  push();
  strokeWeight(2);
  stroke(255);
  line(con1.pointA.x,con1.pointA.y,ball.position.x,ball.position.y);
  line(ball1.position.x,ball1.position.y,ball.position.x,ball.position.y);
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}

