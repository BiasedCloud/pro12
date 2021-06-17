var garden,rabbit,apple,orgleaves;
var gardenImg,rabbitImg,appleImg,orgleavesImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orgleavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage("gardenImg",gardenImg);

//creating boy running
rabbit = createSprite(World.mouseX,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("rabbitImg",rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

if(frameCount% 80 === 0){
  if(select_sprites == 1){
    createApples();
  }
  if(select_sprites == 2){
    createLeaves();
  }  
}
  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage("appleImg",appleImg);
  apple.velocityY = 3;
  apple.scale = 0.075;
  apple.lifeTime = 150;
}

function createLeaves(){
  orgleaves = createSprite(random(50,350),40,10,10);
  orgleaves.addImage("orgleavesImg",orgleavesImg);
  orgleaves.velocityY = 3;
  orgleaves.scale = 0.075;  
  orgleaves.lifetime = 150;
}
