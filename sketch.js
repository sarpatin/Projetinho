var box1


function setup() {
  createCanvas(400,400);
  box1 = createSprite(200, 200, 30, 30)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box1.position.x = box1.position.x +5
  }
  if(keyIsDown(LEFT_ARROW)){
    box1.position.x = box1.position.x -5
  }
  if(keyIsDown(DOWN_ARROW)){
    box1.position.y = box1.position.y +5
  }
  if(keyIsDown(UP_ARROW)){
    box1.position.y = box1.position.y -5
  }







drawSprites();
}




