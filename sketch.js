
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground (400,10,800,20)
	bob1=new BobClass(150,500,40)
	bob2=new BobClass(230,500,40)
	bob3=new BobClass(310,500,40)
	bob4=new BobClass(390,500,40)
	bob5=new BobClass(470,500,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}



