//Adding Game State
 var PLAY = 1;
 var END = 0;
 var gameState = PLAY;

//Adding Canvas And Background back=background              
 var canvas,back1,back1Img;

//Adding Players Info, jack=Player
 var jack,jack_moving,jack_jumping;

//Adding invisibleGround 
 var invisibleGround;
 
 var obstacles; 
 var coins;

//Loading Images And Animations In preload Function
function preload(){

   //loading animations for player
    jack_moving=loadAnimation("Images/Image1.png","Images/Image2.png","Images/Image3.png","Images/Image4.png",
        "Images/Image5.png","Images/Image6.png","Images/Image7.png");  
    
    jack_jumping=loadAnimation("Images/Image1.png");

   //loading image for background 
    back1Img=loadImage("Images/Bg.jpg");
}

//Drawing Character,Background,etc.. In Setup Function
function setup(){

   //creating canvas
    canvas=createCanvas(1800,850);
    
   //creating background, addingImage 
    back1=createSprite(1200,399.9,50,50);
    back1.addImage("back1",back1Img);

   //making back infinity and giving speed to background
    back1.x = back1.width /2;
    back1.velocity.x=-9

  //adjusting background according to screen
    back1.scale=1.499
   
   //creating player and addingAnimation   
    jack = createSprite(150,730,20,20);
    jack.addAnimation("moving",jack_moving);
    jack.addAnimation("jumping",jack_jumping);

   //adjusting jack to screen
    jack.scale=0.6

  //Creating invisibleGround To Avoid Fall In Void
  invisibleGround = createSprite(937,845,1880,15);
  invisibleGround.visible=false;
}

//Displaying Sprites and many more in draw functions
function draw(){

   //clear the screen
    background(216,191,216);
  
 //this function will only work in Play State
 if(gameState===PLAY){
  //making background1 infinty 
    if (back1.x < 0){
        back1.x = back1.width/2;
    }

    if(keyDown("space")&& jack.y >= 727.7) {
      jack.velocityY = -12;
      jack.changeAnimation("jumping",jack_jumping);
  }
    
    jack.velocityY = jack.velocityY + 0.8;
    jack.changeAnimation("moving",jack_moving);
 }
   
   jack.collide(invisibleGround);
   console.log(jack.y);

   spawnObstacles();
   spawnCoins();

   //drawing sprites
    drawSprites();
}

function spawnObstacles(){
if(frameCount % 300===0){  
  obstacles = createSprite(1800,758,50,50);
  obstacles.velocityX=-5;
}
}

function spawnCoins(){
  if(frameCount % 200===0){
    coins=createSprite(1800,758,50,50);
    coins.shapeColor="red";
    coins.velocityX=-6;
  }
}