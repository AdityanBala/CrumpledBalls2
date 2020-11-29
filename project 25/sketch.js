
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var Bin1,Bin2,Bin3;
var DustBin,BinImage;

function preload(){
  BinImage = loadImage("DustbinGreen.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,150,60,60);
  ground = new Ground(400,690,800,30);
  Bin1 = new Dustbin(555,610,15,110);
  Bin2 = new Dustbin(600,660,100,15);
  Bin3 = new Dustbin(645,610,15,110);

  DustBin = createSprite(600,617,150,70)
  DustBin.addImage(BinImage);
  DustBin.scale = 0.35;

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("white");
 
  rectMode(CENTER);
 
  paper.display();
  ground.display();

  Bin1.display();
  Bin2.display();
  Bin3.display();

  Throw();

  drawSprites();
}

function Throw(){
  if(keyWentDown("UP_ARROW")){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:140,y:-240})

    console.log("throw");
  }
}


