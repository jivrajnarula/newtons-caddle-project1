
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
	
	bobDiameter=40;

	rope1=new this.rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
	rope2=new this.rope(bobObject2.body,roofObject.body,-bobDiameter*1,0)
	rope3=new this.rope(bobObject3.body,roofObject.body,0,0)
	rope4=new this.rope(bobObject4.body,roofObject.body,bobDiameter*1,0)
	rope5=new this.rope(bobObject5.body,roofObject.body,bobDiameter*2,0)
	
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



