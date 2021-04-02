
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var treeImg, boyImg, stoneImg, mangoImg;

function preload()
{
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
	stoneImg = loadImage("stone.png");
	//mangoImg = loadImage("mango.png");
}

function setup() {
	var canvas = createCanvas(1500,600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1250,370,10,10);
	ground = new Ground(750,580,1500,20);
	boy = new Boy(300,490,120,180);

	stone = new Stone(340,420,30);


	mango1 = new Mango(1300,200,50);
	mango2 = new Mango(1200,220,50);
	mango3 = new Mango(1100,250,50);
	mango4 = new Mango(1250,300,50);
	mango5 = new Mango(1400,270,50);
	mango6 = new Mango(1100,320,50);
	mango7 = new Mango(1170,290,50);
	mango8 = new Mango(1300,260,50);
	mango9 = new Mango(1350,290,50);
	mango10 = new Mango(1430,320,50);

	string = new String(stone.body, {x:340, y:490});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);


  tree.display();
  ground.display();
  boy.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  string.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  textSize(50);
  fill("white");
  text("Press space for second chance", 100, 100);
  
  drawSprites();
 
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})

}

function mouseReleased(){

    string.fly(); 
	Matter.Body.applyForce(stone.body,stone.body.position,{x:random(70,130),y:random(-230,-300)});

}

function detectCollision(Stone,Mango){
	mangoBodyPos = Mango.body.position
	stoneBodyPos = Stone.body.position

	var distance = dist(stoneBodyPos.x, stoneBodyPos.y, mangoBodyPos.x, mangoBodyPos.y)

	if(distance <= Mango.radius+Stone.radius){
		Matter.Body.setStatic(Mango.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:340, y:510})
		string.attach(stone.body);
	}
}




