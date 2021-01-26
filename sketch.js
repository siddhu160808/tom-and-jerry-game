var bg,bgi
var j1,j2,j3,j4;
var tom1,tom2;
var j1i;
var tom1i,tom2i; 
var tom4,j4;
function preload() {
    //load the images here
    bgi = loadImage("images/garden.png");
    j1i = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    tom1i = loadImage("images/tomOne.png");
    tom2i = loadAnimation("images/tomTwo.png","images/tomThree.png")
    tom4 = loadAnimation("images/tomFour.png")
    j4 = loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,700);
    //create tom and jerry sprites here

    bg = createSprite(500,350);
    bg.addImage(bgi);
    
    j1 = createSprite(200,550);
    j1.addAnimation("jerry",j1i);
    j1.scale=0.1;
    j1.addAnimation("j4",j4)   

    tom1 = createSprite(900,550);
    tom1 . addImage(tom1i);
    tom1.scale=0.1;

    tom2 = createSprite(900,550);
    tom2.addAnimation("tom",tom2i);
    tom2.scale=0.2;
    tom2.visible=false;
    tom2.setCollider("rectangle",0,0,700,50)
        tom2.addAnimation("tom4",tom4)
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   
    if(tom2.isTouching(j1)){
        tom2.velocityX = 0; 
        tom2.changeAnimation("tom4",tom4)  
        j1.changeAnimation("j4",j4)   
    }

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    tom2.visible=true
    tom1.visible = false;
    tom2.velocityX = -5;

}

}
