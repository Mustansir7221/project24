
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,width,40);
	paper=new Paper(150,300,30);
	dustbin1 = new Dustbin(600,670,200,20);
	dustbin2 = new Dustbin(705,630,20,100);
	dustbin3 = new Dustbin(500,630,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  keyPressed();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
  
  drawSprites();
 
}
 function keyPressed(){
	 if (keyCode===UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:55 ,y:55});
	 }
	 
 }


