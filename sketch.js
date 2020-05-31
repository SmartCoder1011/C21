var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
var mouseRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";

  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green";

  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="green";

  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="green";

  mouseRect = createSprite(400, 800,80,30);
  mouseRect.shapeColor = "green";
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);  
  mouseRect.x=World.mouseX;
  mouseRect.y=World.mouseY;
  if(isTouching(mouseRect,gameObject1)){
    mouseRect.shapeColor="red";
    gameObject1.shapeColor="red";
  }else{
    mouseRect.shapeColor="green";
    gameObject1.shapeColor="green";
  }
  bounceOff(fixedRect,movingRect);
  drawSprites();
}

