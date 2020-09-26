
var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, ObstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
createCanvas(600,600);  

monkey=createSprite(110, 515 ,20, 20) 
monkey.scale=0.1 
monkey.addAnimation("monkey running", monkey_running);
ground=createSprite(10, 550, 1200, 10); 
FoodGroup= new Group();
ObstacleGroup= new Group();  
ground.visible=true;
 
}


function draw() {
  background("lightgreen");
  console.log(frameCount);
  ground.velocityX=-15
  if(keyDown("space")&& monkey.y>=514){
   monkey.velocityY=-25   
   }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  banana();
  obstacle();
 
  if(FoodGroup.isTouching(monkey)){
  score=score+1
  FoodGroup.destroyEach();
     }
  if(ObstacleGroup.isTouching(monkey)){
   monkey.velocityX=0;
   FoodGroup.setVelocityXEach=0;
   ObstacleGroup.setVelocityXEach=0;
     }
  
  
drawSprites();
  
}

function banana(){
 if (frameCount%100===0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -10;
   FoodGroup.add(banana)
   banana.lifetime=200;
}
}
function obstacle(){
  if(frameCount%300===0){
var obstacle= createSprite(600,520,40,10);
obstacle.addImage(obstacleImage);
obstacle.scale=0.2;
obstacle.velocityX=-5
obstacle.lifetime=200; 
ObstacleGroup.add(obstacle)
}  
}
function survivalTime(){
var survivalTime=0;
stroke("white"); 
textSize(20);
fill("white");
text("Score:"+score,500, 50); 
  
stroke("black"); 
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())  
text("Survival Time:"+survivalTime,100, 50);   
}







