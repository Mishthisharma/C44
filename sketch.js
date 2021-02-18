var boat , boatimg, obstacles ,  ocean , oceanImg
var gameState = 0
var TeamCount
var database
var game
var form
var team

function preload ()
{
    boatimg = loadImage("Images/Picture2.png")
    oceanImg   = loadImage("Images/oceanbackground.jpg")
}
function setup() 
{
createCanvas(displayWidth , displayHeight)
database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
//ocean = createSprite( 200 , 200 , displayWidth , displayHeight)
//ocean.x = displayWidth/2 
//ocean.addImage("ocean" , oceanImg)
//ocean.velocityX = -4

 //boat = createSprite(320 , 200) 
 //boat.addImage("boat" , boatimg)
 //boat.scale = 0.5

 
}

function draw()
{ 
   //background (oceanImg)
   /*if (ocean.x < 0 ) 
   {
      ocean.x = displayWidth/2  
   }*/
  drawSprites();
}