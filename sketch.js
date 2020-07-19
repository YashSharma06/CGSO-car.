var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(50,90);
  weight = random(400,1500);
}

function draw() {
  background(0,0,0);  

  car.velocityX = speed;
  if(car.x - wall.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }

  }

  drawSprites();
}