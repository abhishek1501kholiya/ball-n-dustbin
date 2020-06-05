const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
//var boxes = [];
var engine;
var world;
var ground1;
var circle1;
var bally;





var rect1 , rect2 , rect3 ;
function setup(){
createCanvas(400,400);
engine = Engine.create();
world = engine.world;

rect1 = new Box(330,360,10,50);
rect2 = new Box(360,385,50,10);
rect3 = new Box(390,360,10,50);
//box1 = new Box(200,100,20,20);
circle1 = new Ball(100,385,20);


ground1 = new Ground(200,400,400,10);
World.add(world,ground1);
Engine.run(engine);
}

function draw()
{
	background(0,0,0);


	ground1.display();
	rect1.show();
	rect2.show();
	rect3.show();
	circle1.show();
	//rectMode(CENTER);
	//fill(170);
	//stroke(255);
	//strokeWeight(4);


	
}
function keyPressed(){
	if(keyCode  === UP_ARROW){
		
		console.log(circle1.x);
		Matter.Body.applyForce(circle1.body,circle1.body.position,{x:340 , y:385})
	}

}