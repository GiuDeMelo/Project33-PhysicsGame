const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var object;
var ball;

///////////////////////////////////////////////////////////
function setup() {
  var tela = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  //object
  var object_options = {
    isStatic: true
  }

  object = Bodies.rectangle(200, 390, 400, 20, object_options);
  World.add(world,object);

  //ball
  var ball_options = {
    restitution: 1.0
  }

  ball = Bodies.circle(200, 100, 10, ball_options);
  World.add(world,ball);
  
  //console.log
  console.log(object)
}

///////////////////////////////////////////////////////////
function draw() {
  background(0);
  
  Engine.update(engine);

//object
  rectMode (CENTER);
  rect(object.position.x, object.position.y, 400, 20);
  //lembrar de botar uma variavel no tamanho! :D

 //ball
  ellipseMode (RADIUS);
  ellipse(ball.position.x, ball.position.y,20);
  //lembrar de botar uma variavel no tamanho! :D

  drawSprites();
}