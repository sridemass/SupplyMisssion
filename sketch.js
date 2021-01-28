var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundImg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	groundImg=loadImage("earthquake.png")
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height/2, width,10);
	groundSprite.addImage(groundImg);
	groundSprite.scale=5
	groundSprite.shapeColor=color(255)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.64, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 
	Matter.Body.setStatic(packageBody,false);
    
  }
}



