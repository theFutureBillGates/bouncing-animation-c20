var fixedRect, movingRect;
var object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,700,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  object3 = createSprite(700,200,65,30);
  object3.velocityX = -4;
  object3.shapeColor = "yellow";
  object3.debug = true;

  object4 = createSprite(0,200,65,30);
  object4.velocityX = 4;
  object4.shapeColor = "yellow";
  object4.debug = true;

}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(object3,object4);
  bounceOff(fixedRect,object3);
  bounceOff(object3,movingRect);
  bounceOff(object4,movingRect);
  bounceOff(object4,fixedRect);

  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
     object1.velocityX = object1.velocityX * (-1);
     object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }

}











