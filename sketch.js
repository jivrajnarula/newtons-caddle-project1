
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	roof = new Roof(380,60,325,15);
	bob1 = new Bob(380,300,30);
	bob2 = new Bob(bob1.x+60,300,30);
	bob3 = new Bob(bob2.x+60,300,30);
	bob4 = new Bob(bob1.x-60,300,30);
	bob5 = new Bob(bob4.x-60,300,30);

  rope1 = new Rope(bob1.body,roof.body,0,0);
  rope2 = new Rope(bob2.body,roof.body,60,0);
  rope3 = new Rope(bob3.body,roof.body,120,0);
  rope4 = new Rope(bob4.body,roof.body,-60,0);
  rope5 = new Rope(bob5.body,roof.body,-120,0);

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
	
	bobDiameter=40;


	
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display() 
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}



