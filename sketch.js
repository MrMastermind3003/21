var wall,thickness;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(1600,400)
  background(0,0,0); 
  speed=Math.round(random(45,90));
  thickness=Math.round(random(28,83));
  wall = createSprite(1200,200,thickness,height/2);
  bullet = createSprite(50,200,50,10);
}

function draw() {
  
  
  bullet.shapeColor = "white";
  buller.velocityX = speed;

  if (hasCollided(bulllet,wall)){
    bullet.velocity = 0;
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}
function hasCollided(object1,object2){
  if(object2.x - object1.x<object1.width/2+object2.width/2){
    return true;
  } else{
    return false
  }
}