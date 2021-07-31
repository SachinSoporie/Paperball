const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var trash1, trash2, trash3;
var ground;

var ball;

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	groundObg = new ground(width/2,670,width,20);
	leftSide = new ground(1100, 600, 20, 120);

	ellipseMode(RADIUS);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		density: 1.2,
		friction: 0
	}

	ball = Bodies.circle(350, 100, 20, ball_options);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  ellipse(ball.position. x, ball.position.y, 50, 50);

  groundObg.show();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball, 300, 2);
	}
}