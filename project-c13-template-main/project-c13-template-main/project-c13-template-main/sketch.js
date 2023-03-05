var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 leafImg = loadImage("Leaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
  
  

garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}



  

function draw() {
  background(0);

  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  
  
  var select_sprites = Math.round (random(1,3));
  
  if (frameCount % 60 === 0) {
  if (select_sprites == 1) {
  createApples()
  }else if (select_sprites == 2) {
  createLeaf()
  }else {
  createRed()
  }
  
}
drawSprites();

}


function createApples() {
  
  apple = createSprite(random(50,350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function createLeaf() {
  
  leaf = createSprite(random(50,350),40, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale=0.07;
  leaf.velocityY = 3;
  leaf.lifetime = 150;
}

function createRed() {
  
  redL = createSprite(random(50,350),40, 10, 10);
  redL.addImage(redImg);
  redL.scale=0.07;
  redL.velocityY = 3;
  redL.lifetime = 150;
}