const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup() {
  createCanvas(800,400);


  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic : true
  }

  var option2 = {
    restitution : 0.5
  }

  object = Bodies.rectangle(400,380,800,20,option);
  World.add(world,object);
  
  ball = Bodies.circle(200,200,20, option2);
  World.add(world,ball);

  console.log(ball);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER)
  rect(object.position.x,object.position.y,800,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20)
}