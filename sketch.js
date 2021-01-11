
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roofobj;
var rope1,rope2,rope3,rope4,rope5;
var block1,block2,block3,block4,block5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofobj = new Roof(400,100,500,50);
	bob1 = new Bob(300,300,100);
	bob2 = new Bob(350,300,100);
	bob3 = new Bob(400,300,100);
	bob4 = new Bob(450,300,100);
	bob5 = new Bob(500,300,100);

	block1 = new block(180,100,10,10);	
	block2 = new block(280,100,10,10);
	block3 = new block(380,100,10,10);
	block4 = new block(480,100,10,10);
	block5 = new block(580,100,10,10);


	rope1 = new rope(bob1.body,block1.body,0,0)
	rope2 = new rope(bob2.body,block2.body,0,0)
	rope3 = new rope(bob3.body,block3.body,0,0)
	rope4 = new rope(bob4.body,block4.body,0,0)
	rope5 = new rope(bob5.body,block5.body,0,0)

	
	Engine.run(engine);
	
}


function draw() {
	
  rectMode(CENTER);
  background(200);
  bob1.display(); 
  bob2.display(); 
  bob3.display(); 
  bob4.display(); 
  bob5.display(); 
  roofobj.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  keyPressed(); 
}
function keyPressed() 
{
	 if (keyCode === UP_ARROW) 
	 {
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); 
} 
}

