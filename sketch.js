var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400)
  ground = createSprite(200, 320, 400, 10);
  ground.x = ground.width/2;
  
  monkey = createSprite(60, 320, 10, 10);
  monkey.addAnimation("running", monkey_running);  
  monkey.scale = 0.1;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

  score = 0;
}


function draw() {
  background("lightblue");
 
  text("Score: "+ score, 320,50);
  
  monkey.collide(ground);
  
  if(ground.x>0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y>= 280){
    monkey.velocityY = -12;
  }
  
  score = score + Math.round(getFrameRate()/60);
  
  monkey.velocityY = monkey.velocityY + 0.8;
  ground.velocityX = -2;
  food();
  obstacles();
  drawSprites();
  
}

function food(){
  if(frameCount%80 === 0){
    banana = createSprite(400, 300, 40, 10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(150, 200));
    banana.scale = 0.12;
    banana.velocityX = -3;
    banana.lifetime = 145;
    
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300 === 0){
    obstacle = createSprite(400, 300, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 145;
    
    obstacleGroup.add(obstacle);
  }
}


