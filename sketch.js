const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,hammer,rubber,iron,stone,sand,engine,world,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;

function setup() {
	createCanvas(1200,600);

	engine = Engine.create();
	world=engine.world;
	
	hammer = new Hammer();
	ground = new Ground();
	iron = new Iron();
	stone=new Stone();
	rubber=new Rubber();
	sand = new Sand(100,600);
	sand2= new Sand(106,600);
	sand3 = new Sand(109,600);
	sand4 = new Sand(112,600);
	sand5 = new Sand(115,600);
	sand6 = new Sand(118,600);
	sand7 = new Sand(121,600);
	sand8 = new Sand(124,600);
	sand9 = new Sand(127,600);
	sand10 = new Sand(130,600);
}


function draw() {	
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  hammer.display();
  ground.display();
  iron.display();
  stone.display();
  sand.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();


  drawSprites();
 
}



