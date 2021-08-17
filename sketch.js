
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,wall1,wall2,wall3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var wall1_options={
    isStatic:true
	}
	var wall2_options={
		isStatic:true
		}
   var wall3_options={
			isStatic:true
			}
    var ball_options={
		restitution: 0.95,
    frictionAir:0.01
	}

  wall1=Bodies.rectangle(50,50,750,50,wall1_options)
  World.add(world,wall1);

  ball=Bodies.circle(50,600,20,ball_options);
  World.add(world,ball);

  wall2=Bodies.rectangle(700,50,150,50,wall2_options)
  World.add(world,wall2);

    wall3=Bodies.rectangle(550,50,150,50,wall3_options);
  World.add(world,wall3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  rect(wall1.position.x,wall1.position.y,750,50);
  rect(wall2.position.x,wall2.position.y,150,50);
  rect(wall3.position.x,wall3.position.y,750,50);
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}
function keyPressed()
{
  if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0});
    }
}
